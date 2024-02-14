const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const target = +input[0].split(' ')[1]
const arr = input[1].split(' ').map(Number)

function solution(arr, target) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < target; i++) {
    sum += arr[i]
  }
  answer = sum
  let start = 0;
  let end = target;
  for (let i = end; i < arr.length; i++) {
    sum += arr[i] - arr[start]
    answer = Math.max(answer, sum)
    start++
  }
  console.log(answer)
}

solution(arr, target);
