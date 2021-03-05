const request = require("supertest");
const { connectMongo } = require("../../services/database/database");

let app;
beforeAll(async (done) => {
  let db = await connectMongo("test");
  const { expressApp } = require("../../index");
  const { declareTestRoutes } = require("../../api/declareRoutes");
  app = expressApp;
  declareTestRoutes(expressApp)
  done();
});

describe("Integration Test Example", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/test")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    done();
  });
});
