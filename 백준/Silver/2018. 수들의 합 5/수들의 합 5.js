const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim();

function solution(target) {
  let answer = 0;
  let left = 1;
  let right = 1;
  let sum = 0;
  while (left <= target) {
    if (sum === target) {
      answer++
      sum -= left
      left++
    } else if (sum > target) {
      sum -= left
      left++
    } else {
      sum += right
      right++
    }
  }
  console.log(answer);
}

solution(+input);
