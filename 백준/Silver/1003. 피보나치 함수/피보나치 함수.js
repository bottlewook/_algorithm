const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const N = Number(input[0]);


dp = new Array(100).fill(0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= 40; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

for (let t = 1; t <= N; t++) {
    let n = Number(input[t]);
    if (n === 0) console.log(1, 0);
    else console.log(dp[n-1], dp[n])
} 