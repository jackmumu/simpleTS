import findMideum from "../寻找两个正序数组的中位数";
describe("寻找两个正序数组的中位数", () => {
  it("1", () => {
    const a = findMideum([1, 2, 3], [3, 4]);
    expect(a).toBe(3);
  });
  it("2", () => {
    const a = findMideum([1, 2, 3], [4, 5, 6]);
    expect(a).toBe(3.5);
  });
});
