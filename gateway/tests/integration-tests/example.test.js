const request = require("supertest");
const { connectMongo } = require("../../services/database/database");

let expressApp;
beforeAll(async (done) => {
  await connectMongo("test");
  const { app } = require("../../index");
  const { declareTestRoutes } = require("../../api/declareRoutes");
  expressApp = app;
  declareTestRoutes(expressApp)
  done();
});

describe("Integration Test Example", () => {
  test("It should response the GET method", (done) => {
    request(expressApp)
      .get("/test")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    done();
  });
});
