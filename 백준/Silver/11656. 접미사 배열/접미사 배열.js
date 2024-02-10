const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(word) {
  const answer = [];
  for (let i = 0; i < word.length; i++) {
    answer.push(word.slice(i))
  }
  const sortAnswer = answer.sort()
  for (let x of sortAnswer) {
    console.log(x)
  }
}

solution(input)