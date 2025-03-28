const a = [1, 2, 3, 4, 1];
const hasChecked = new Array(a.length).fill(false);
const dispose = (a: number[], state: number[], res: Array<Array<number>>) => {
  if (state.length === a.length) {
    res.push([...state]);
    return;
  }
  const duplicated = new Set<number>();
  for (let i = 0; i < a.length; i++) {
    if (!hasChecked[i] && !duplicated.has(a[i])) {
      duplicated.add(a[i]);
      hasChecked[i] = true;
      state.push(a[i]);
      dispose(a, state, res);
      hasChecked[i] = false;
      state.pop();
    }
  }
  return res;
};
function permute(nums: number[]): number[][] | undefined {
  return dispose(nums, [], []);
}
(window as any).permute = permute;
console.log(permute(a));
export {};
