const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(input) {
  let answer = 0;
  const stack = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' && input[i + 1] === ')') {
      answer += stack.length
      i++
    } else if (input[i] === '(') {
      stack.push('(')
    } else if (input[i] === ')') {
      stack.pop()
      answer++
    }
  }
  console.log(answer)
}

solution(input)