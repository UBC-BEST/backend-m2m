from celery import Celery
import time

processingApp = Celery('processing_queue', broker='amqp://processing-service@localhost//', backend='amqp')
reconciliationApp = Celery('reconciliation_queue', broker='amqp://processing-service@localhost//', backend='amqp')

@processingApp.task(serializer='json', bind=True)
def process(self, data):
    """Example background processing task with status updates."""
    print('Received processing task: \n ' + str(data))
    self.update_state(state='PENDING',
                          meta={'step': 1,
                                'status': 'Queued for processing'})
    print('Started processing task')

    time.sleep(1000)

    self.update_state(state='PROCESSING',
                          meta={'step': 2,
                                'status': 'Started Processing task'})
    
    print('Finished processing task')
    self.update_state(state='RECONCILING',
                          meta={'step': 3,
                                'status': 'Publishing reconciling task'})

    time.sleep(1000)

    try:
        reconciliationApp.send_task('reconciliation_queue.reconciliationTask', kwargs={
            'data': 'data',
        })
        self.update_state(state='COMPLETE',
                          meta={'step': 4,
                                'status': 'Completed processing task'})
    except Exception as e:
        self.update_state(state='ERROR',
                          meta={'step': 3,
                                'status': 'Error publishing reconciling task \n' + str(e)})
    return {'step': 4,
            'status': 'Completed processing task'}