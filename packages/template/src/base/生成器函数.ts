function* num() {
  yield 1;
  yield 2;
  yield 3;
}
const a = num();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
