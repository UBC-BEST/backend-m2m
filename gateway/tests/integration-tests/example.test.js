const request = require("supertest");
const { app } = require("../../index");
const { declareTestRoutes } = require("../../api/declareRoutes");
const { connectMongo } = require("../../services/database/database");

beforeAll(() => {
  declareTestRoutes(app);
  connectMongo('test');
});

describe("Integration Test Example", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/test")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
    done();
  });
});