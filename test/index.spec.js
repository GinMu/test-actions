const { add } = require("../src");

describe("test add", () => {
  test("test add", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
