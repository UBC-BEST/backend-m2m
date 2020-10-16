const { exampleFunction } = require("../../api/endpoints/example");

test("unit test for testHandler", () => {
  expect(exampleFunction()).toBe("Hello world!");
});
