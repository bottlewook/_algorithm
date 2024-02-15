const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const target = +input[0]
const arr = input[1].split(' ').map(Number)

function solution(cards, target) {
  const dp = Array.from({ length: target + 1 }, () => 0)
  for (let i = 1; i <= target; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }
  console.log(dp[target])
}

solution(arr, target);
