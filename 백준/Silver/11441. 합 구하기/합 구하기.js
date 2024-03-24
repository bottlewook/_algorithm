const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

const sumArr = [0]
let sum = 0

for (let x of arr) {
  sum += x
  sumArr.push(sum)
}

let answer = ''

for (let i = 3; i < input.length; i++) {
  let [start, end] = input[i].split(' ').map(Number)
  answer += sumArr[end] - sumArr[start - 1] + '\n'
}

console.log(answer)