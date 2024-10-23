const s = "ssss";
const maxLong = (s: string) => {
  let rk = -1;
  let set = new Set();
  let sum = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      set.delete(s[i]);
    }
    while (rk + 1 < len && !set.has(s[rk + 1])) {
      set.add(s[++rk]);
    }
    sum = Math.max(rk + 1 - i, sum);
  }
  return sum;
};
export default maxLong;
console.log(maxLong(s));
