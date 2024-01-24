const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = BigInt(fs.readFileSync(readFileSyncAddress).toString().trim());

function factorial(num) {
  if (num === 0n || num === 1n) return 1n;
  return num * factorial(num - 1n);
}

const value = factorial(input).toString();

let answer = 0;

for (let i = value.length - 1; i >= 0; i--) {
  if (value[i] === '0') answer++;
  else break;
}

console.log(answer);
