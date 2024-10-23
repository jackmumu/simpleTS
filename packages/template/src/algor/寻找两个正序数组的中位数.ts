const findMideum = (arr: Array<number>, arr2: Array<number>) => {
  const a = [...arr, ...arr2];
  a.sort((a, b) => a - b);
  if (a.length % 2 == 0) {
    const mid = a.length / 2;
    return (a[mid - 1] + a[mid]) / 2;
  }
  return a[Math.floor(a.length / 2)];
};
export default findMideum;
