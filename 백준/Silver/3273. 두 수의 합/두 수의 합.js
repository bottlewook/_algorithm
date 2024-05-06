const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const target = Number(input[2]);

arr.sort((a, b) => a - b);

let start = 0;
let end = arr.length - 1;

let answer = 0;

while (start < end) {
  let sum = arr[start] + arr[end];
  if (sum === target) {
    answer++
    start++
  } else if (sum < target) {
    start++
  } else {
    end--
  }
}

console.log(answer)