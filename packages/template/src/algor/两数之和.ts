const find = (arr: Array<number>, target: number) => {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (m.has(target - item)) {
      return [m.get(target - item), i];
    }
    m.set(item, i);
  }
};
export default find;
