const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const target = +input[0].split(' ')[1]
const arr = input[1].split(' ').map(Number)

function solution(arr, target) {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    
    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(solution(arr, target));
