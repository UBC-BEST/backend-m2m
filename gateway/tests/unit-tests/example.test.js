const { exampleFunction, examplePrivateFunction } = require("../../api/endpoints/example");

test("unit test for testHandler", () => {
  expect(exampleFunction()).toStrictEqual(["walk the dog", "feed fish", "pet the cat"]);
});

test("unit test for privateTestHandler", () => {
  expect(examplePrivateFunction()).toStrictEqual("Private!");
});
