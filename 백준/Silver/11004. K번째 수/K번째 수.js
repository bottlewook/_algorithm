const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b)
console.log(arr[K - 1])