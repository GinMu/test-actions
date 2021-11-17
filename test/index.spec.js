const { add } = require("../src");

describe("test add", () => {
  test("test add", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
