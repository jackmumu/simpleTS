import { makeNodes, linkedList, flatNodes } from "./makeNodes";
const node = makeNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function revertNodo(node: linkedList, [left, right]: [number, number]) {
  let p = node;
  for (let i = 0; i < left; i++) {
    node = node.next;
  }
  let successor: linkedList;
  const reverse = (head: linkedList, n: number) => {
    if (n == 1) {
      successor = head.next;
      return head;
    }
    let last = reverse(head.next, n - 1) as linkedList;
    head.next.next = head;
    head.next = successor;
    return last;
  };
  reverse(node, right - left);
  return p;
}
const _node = revertNodo(node, [3, 6]);
console.log(_node, flatNodes(_node));
