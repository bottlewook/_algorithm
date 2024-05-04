const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = Number(input[0]);

let arr = [];

for (let i = 1; i <= N; i++) {
  let [age, name] = input[i].split(' ')
  arr.push([Number(age), name])
}

arr.sort((a, b) => {
  return a[0] - b[0]
})

let answer = ''

for (let x of arr) {
  answer += x.join(' ') + '\n'
}

console.log(answer.trim())