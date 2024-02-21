const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const length = +input[0]
const arr = input[1].split(' ').map(Number)

function solution(length, arr) {
  const dy = Array.from({ length: length }, () => 0)
  dy[0] = 1

  for (let i = 1; i < length; i++) {
    let max = 0;
    for (j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j]
      }
    }
    dy[i] = max + 1
  }
  console.log(Math.max(...dy))
}

solution(length, arr)