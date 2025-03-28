function choose(arr: Array<number>) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    for (let k = i + 1; k < len; k++) {
      if (arr[k] < arr[j]) {
        j = k;
      }
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
(window as any).choose = choose;
console.log(choose([22, 11, 55, 66, 77, 88, 99, 133, 4400]));
export {};
