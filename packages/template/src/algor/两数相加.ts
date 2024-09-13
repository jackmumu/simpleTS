import { linkedList } from "../datastraucture/makeNodes";
const twoSum = (l1: linkedList, l2: linkedList) => {
  let n = new linkedList();
  let carry = 0;
  let dummy = n;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = Math.floor(sum / 10);
    n = n.next = new linkedList(sum % 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    n = n.next = new linkedList(carry);
  }
  return dummy.next;
};
export default twoSum;
