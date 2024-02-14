const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(input) {
  const dp = Array.from({ length: input }, () => 0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
  }
  console.log(dp[input])
}

solution(+input);
