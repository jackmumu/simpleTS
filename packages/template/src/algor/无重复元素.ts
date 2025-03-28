/**
 * 给定一个正整数数组nums和一个目标正整数target，请找出所有可能的组合，使得组合中的元素和
等于target。给定数组无重复元素，每个元素可以被选取多次。请以列表形式返回这些组合，列表中
不应包含重复组合。
示例1：
输入：nums = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
 */
const dispose = (
  a: Array<number>,
  target: number,
  state: Array<number>,
  res: Array<Array<number>>
) => {
  const sum = state.reduce((a, b) => a + b, 0);
  if (sum === target) {
    res.push([...state]);
    return;
  }
  a.forEach((item, i) => {
    if (sum + item <= target) {
      state.push(item);
      dispose(a.slice(i), target, state, res);
      state.pop();
    }
  });
  return res;
};
function combinationSum(
  candidates: number[],
  target: number
): number[][] | undefined {
  return dispose(candidates, target, [], []);
}
console.log(combinationSum([2, 3, 6, 7], 7));
(window as any).combinationSum = combinationSum;
export {};
