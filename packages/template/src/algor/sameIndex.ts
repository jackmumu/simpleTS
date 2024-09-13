const arr: Array<any> = [
  {
    text: "ba",
  },
  {
    text: "aa",
  },
  {
    text: "aa",
  },
  {
    text: "aa",
  },
  {
    text: "ba",
  },
  {
    text: "a  a",
  },
  {
    text: "a  a",
  },
];
const counter: { [key: string]: number } = {};

// 遍历数组，为每个对象添加自增的标识
arr.forEach((item) => {
  if (!counter[item.text]) {
    counter[item.text] = 1;
  } else {
    counter[item.text]++;
  }
  item.id = counter[item.text];
});

console.log(arr);
export {};
