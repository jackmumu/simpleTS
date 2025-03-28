const coin = (coins: Array<number>, target: number) => {
  let arr: Array<number> = [],
    i = coins.length - 1;
  while (target > 0) {
    while (coins[i] > target) {
      i--;
    }
    target -= coins[i];
    arr.push(coins[i]);
  }
  return arr;
};
(window as any).coinMoney = (num: number) => {
  return coin([1, 2, 5, 10, 20, 50, 100], num);
};
// 
console.log(coin([1, 2, 5, 10, 20, 50, 100], 11));
export {};
