const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(input) {
  const dp = Array.from({ length: input + 1 }, () => 0)
  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1)
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1)
  }
  console.log(dp[input])
}

solution(+input)