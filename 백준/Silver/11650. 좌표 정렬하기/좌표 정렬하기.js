const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = Number(input[0]);

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number))
}

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1]
  else return a[0] - b[0]
})

let answer = ''

arr.forEach((item) => {
  answer += item.join(' ') + '\n'
})

console.log(answer.trim())