import { makeNodes, linkedList, flatNodes } from "./makeNodes";
const node = makeNodes([1, 2, 3, 4, 5, 6, 7, 8, 10]);

function revertNodo(node: linkedList, [left, right]: [number, number]) {
  let p = node;
  for (let i = 0; i < left; i++) {
    node = node.next;
  }
  let p2 = new linkedList();
  const reverse = (no: linkedList, n: number) => {
    if(n == )
  }
  return p;
}
const _node = revertNodo(node, [3, 6]);
console.log(_node, flatNodes(_node));
