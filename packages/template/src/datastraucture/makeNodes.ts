class linkedList {
  val: any;
  next: any;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function makeNodes(arr: any[]) {
  let res: Array<linkedList> = [];
  arr.forEach((item, i) => {
    const node = new linkedList(item);
    if (i > 0) {
      res[i - 1].next = node;
    }
    res.push(node);
  });
  return res[0];
}
function flatNodes(node: linkedList) {
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}
export { linkedList, makeNodes, flatNodes };
