const a = [1,2,3,4]
const b = a.reduce((acc, cur) => {
    console.log(acc, cur)
    return acc + cur
}, 0)
console.log(b)
export {}