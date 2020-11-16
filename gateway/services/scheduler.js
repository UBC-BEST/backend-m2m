const { Agenda } = require("agenda");
const { publishFailedEvents } = require("./rabbit");
const { getMongoDb } = require("./database");

const agenda = new Agenda({
  db: { mongo: getMongoDb(), collection: "scheduler" },
});

agenda.define("requeue failed jobs", publishFailedEvents);

const startScheduler = async () => {
  await agenda.start();
  await agenda.every("15 minutes", "requeue failed jobs");
};

module.exports = {
  startScheduler,
};
