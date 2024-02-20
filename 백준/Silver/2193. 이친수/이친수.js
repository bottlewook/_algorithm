const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()
const target = +input

function solution(target) {
  const dp = Array.from({ length: target + 1 }, () => 0)
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= target; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2])
  }

  console.log(String(dp[target]))
}

solution(target)