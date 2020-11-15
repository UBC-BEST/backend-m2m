from flask import Flask, jsonify
from handlers.tasks import process, processingApp, reconciliationApp
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/status/<task_id>')
def taskstatus(task_id):
    if not processingApp: 
        return "Error connecting to Rabbit"
    task = process.AsyncResult(task_id)
    if task.state == 'PENDING':
        # job did not start yet
        response = {
            'state': task.state,
            'current': 0,
            'status': 'Pending...'
        }
    elif task.state != 'ERROR':
        response = {
            'state': task.state,
            'current': task.info.get('current', 0),
            'status': task.info.get('status', '')
        }
        if 'result' in task.info:
            response['result'] = task.info['result']
    else:
        # something went wrong in the background job
        response = {
            'state': task.state,
            'current': 1,
            'status': str(task.info),  # this is the exception raised
        }
    return jsonify(response)


if __name__ == '__main__':
    app.run()