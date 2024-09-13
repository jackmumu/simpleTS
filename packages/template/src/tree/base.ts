class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const insertNode = (
  root: TreeNode<number> | null,
  value: number
): TreeNode<number> => {
  if (root === null) {
    return new TreeNode(value);
  }
  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else {
    root.right = insertNode(root.right, value);
  }
  return root;
};

export const markTreeNode = (arr: Array<number>): TreeNode<number> | null => {
  if (arr.length === 0) {
    return null;
  }
  let root: TreeNode<number> | null = null;
  for (const value of arr) {
    root = insertNode(root, value);
  }
  return root;
};
export default TreeNode;
