const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()
const target = +input

function solution(target) {
  const dp = Array.from({ length: target + 1 }, () => 0)
  dp[1] = 1
  dp[2] = 3

  for (let i = 3; i <= target; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007
  }

  console.log(dp[target])
}

solution(target)