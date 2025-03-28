function bubble(arr: Array<number>) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
(window as any).bubble = bubble;
console.log(bubble([22, 11, 55, 66, 77, 4400, 88, 99, 133]));
