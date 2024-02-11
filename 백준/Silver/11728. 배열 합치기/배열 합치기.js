const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)

function solution(a, b) {
  const answer = a.concat(b).sort((a, b) => a - b)
  console.log(answer.join(' '))
}

solution(a, b)