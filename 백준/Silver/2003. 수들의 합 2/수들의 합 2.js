const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const target = +input[0].split(' ')[1]
const arr = input[1].split(' ').map(Number)

function solution(arr, target) {
  let answer = 0;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    sum += arr[end];
    
    while (sum >= target) {
      if (sum === target) answer++;
      sum -= arr[start++];
    }

    end++;
  }

  console.log(answer);
}

solution(arr, target);
