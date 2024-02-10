const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ')

function solution(words) {
  const [a, b, c, d] = words
  console.log(+(a.toString() + b.toString()) + +(c.toString() + d.toString()))
}

solution(input)