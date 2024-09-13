import TreeNode from "../base";
describe("TreeNode", () => {
  it("t.value === 1", () => {
    const t = new TreeNode(1);
    expect(t.value).toBe(1);
  });
  it("left.value == 2", () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    expect(t.left.value).toBe(2);
  });
});
