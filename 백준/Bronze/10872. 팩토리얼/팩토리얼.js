const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim()

let value = Number(input)

function solution(num) {
  if (num === 1 || num === 0) return 1
  return num * solution(num - 1)
}

console.log(solution(value))