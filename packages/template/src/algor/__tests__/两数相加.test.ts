import { makeNodes, flatNodes } from "@src/datastraucture/makeNodes";
import twoSum from "../两数相加";
describe("两数相加", () => {
  it("1", () => {
    const a = makeNodes([1, 2, 3, 4]);
    const b = makeNodes([2, 3, 4, 5]);
    const t = twoSum(a, b);
    const arr = flatNodes(t);
    expect(arr).toEqual([3, 5, 7, 9]);
  });
});
