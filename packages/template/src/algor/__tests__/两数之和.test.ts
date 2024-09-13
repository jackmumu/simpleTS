import find from "../两数之和";
describe("两数之和", () => {
  it("simple", () => {
    const arr = [1, 2, 3, 4, 5],
      target = 3;
    const value = find(arr, target);
    expect(value).toEqual([0, 1]);
  });
});
