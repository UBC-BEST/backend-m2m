const { exampleFunction } = require("../../api/endpoints/example");

test("unit test for testHandler", () => {
  expect(exampleFunction()).toStrictEqual(["walk the dog", "feed fish", "pet the cat"]);
});
