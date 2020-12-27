const { exampleFunction, examplePrivateFunction } = require("../../api/endpoints/example");

test("unit test for testHandler", () => {
  expect(exampleFunction()).toStrictEqual([
    {"todo":"pet the cat"},
    {"todo":"feed fish"},
    {"todo":"walk dog"},
  ]);
});

test("unit test for privateTestHandler", () => {
  expect(examplePrivateFunction()).toStrictEqual("Private!");
});
