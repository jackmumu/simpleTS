class linkedList {
  val: any;
  next: any;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
const f = new linkedList(6);
const a = new linkedList(1);
const b = new linkedList(2);
const c = new linkedList(3);
a.next = b;
b.next = c;
c.next = f;
console.log(a);
