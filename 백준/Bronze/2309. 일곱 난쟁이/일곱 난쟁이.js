const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n').map(item => Number(item))

function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0)
  arr.sort((a, b) => a - b)
  let flag = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1)
        arr.splice(i, 1)
        flag = 1
        break
      }
    }
    if (flag) break
  }
  for (let x of arr) {
    console.log(x)
  }
}

solution(input)