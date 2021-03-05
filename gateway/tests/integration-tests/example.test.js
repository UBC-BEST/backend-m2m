const request = require("supertest");
const { connectMongo } = require("../../services/database/database");

beforeAll(async (done) => {
  await connectMongo("test");
  done();
});

describe("Integration Test Example", () => {
  const { app } = require("../../index");
  const { declareTestRoutes } = require("../../api/declareRoutes");
  declareTestRoutes(app);

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
