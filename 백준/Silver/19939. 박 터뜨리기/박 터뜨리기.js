const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

let [n, k] = input[0].split(' ').map(Number)

//  1부터 k까지의 합
let sum = 0;

for (let i = 1; i <= k; i++) {
  sum += i
}

// 공의 개수가 부족한 경우
if (sum > n) console.log(-1)
else {
  n -= sum
  if (n % k === 0) console.log(k - 1)
  else console.log(k)
}

