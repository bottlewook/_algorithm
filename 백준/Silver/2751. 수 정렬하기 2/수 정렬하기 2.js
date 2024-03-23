const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [a, ...input] = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
input = input.map(Number).sort((a, b) => a - b)
let answer = ''
for (let x of input) {
  answer += x + '\n'
}
console.log(answer)