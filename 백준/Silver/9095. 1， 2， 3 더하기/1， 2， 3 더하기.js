const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n').map(item => Number(item))
const [a, ...rest] = input


function solution(arr) {
  const dp = Array.from({ length: 11 }, () => 0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  for (let x of arr) {
    console.log(dp[x])
  }
}

solution(rest)