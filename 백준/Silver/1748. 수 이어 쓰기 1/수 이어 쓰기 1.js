const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(num) {
  let temp = num
  let answer = 0
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10)
    count++
  }
  let plus = 9;
  for (let i = 1; i < count; i++) {
    answer += (plus * i)
    plus *= 10
  }
  answer += ((temp - 10 ** (count - 1) + 1) * count)
  console.log(answer)
}

solution(+input)