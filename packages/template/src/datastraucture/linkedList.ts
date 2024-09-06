import { makeNodes, linkedList, flatNodes} from "./makeNodes";
let node = makeNodes([1, 2, 3]);
let node2 = makeNodes([4, 5, 6]);
console.log(node, node2);
function sum(node1: linkedList, node2: linkedList) {
  let p = node1,
    p2 = node2;
  let carry = 0;
  let dummy = new linkedList();
  let cur = dummy;
  while (p || p2) {
    let sum = (p ? p.val : 0) + (p2 ? p2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    cur.next = new linkedList(sum % 10);
    cur = cur.next;
    if (p) p = p.next;
    if (p2) p2 = p2.next;
  }
  if (carry) cur.next = new linkedList(carry);
  return dummy.next;
}
console.log(flatNodes(sum(node, node2)));
