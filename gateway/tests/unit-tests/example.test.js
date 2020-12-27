const { exampleFunction, examplePrivateFunction } = require("../../api/endpoints/example");

test("unit test for testHandler", () => {
  expect(exampleFunction()).toStrictEqual({ "todo":["pet the cat", "walk the dog", "feed fish"] });
});

test("unit test for privateTestHandler", () => {
  expect(examplePrivateFunction()).toStrictEqual("Private!");
});
