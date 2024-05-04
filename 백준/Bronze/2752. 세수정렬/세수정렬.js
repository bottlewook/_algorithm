const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)

console.log(arr.sort((a, b) => a - b).join(' '))