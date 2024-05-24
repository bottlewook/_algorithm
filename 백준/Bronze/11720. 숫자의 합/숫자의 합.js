const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const string = input[1]

let answer = 0;

for (let x of string) answer += +x

console.log(answer)