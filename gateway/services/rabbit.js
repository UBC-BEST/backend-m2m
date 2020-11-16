const jackrabbit = require("@pager/jackrabbit");
const R = require("ramda");

const rabbit = jackrabbit(process.env.RABBIT_URL);

const exchange = rabbit.default();

const internalQueue = [];

const reconciliationQueue = exchange.queue({
  name: "reconciliation_queue",
  durable: true,
});

const publishProcessingEvent = async (processingEvent) =>
  new Promise((resolve, reject) => {
    try {
      exchange.publish(processingEvent, { key: "processing_queue" });
    } catch (err) {
      console.error("[Rabbit] Error publishing event to queue: ", err);
      return reject(err);
    }
    return resolve("ok");
  });

const registerReconciliationHandler = (reconciliationHandlerFunction) => {
  reconciliationQueue.consume(reconciliationHandlerFunction);
};

const publishFailedEvents = async () => {
  if (!R.isEmpty(internalQueue)) {
    const task = internalQueue.pop();
    publishProcessingEvent(task)
      .then(() => {
        console.log(`[Rabbit] Successfully published failed Event.`);
      })
      .catch((err) => {
        console.log(
          `[Rabbit] Error publishing event, requeing into internal queue: ${err}`
        );
        internalQueue.push(task);
      });
  } else {
    console.log(`[Rabbit] No events to publish, waiting.`);
  }
};

module.exports = {
  publishProcessingEvent,
  registerReconciliationHandler,
  publishFailedEvents,
};
