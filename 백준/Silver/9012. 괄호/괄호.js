const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

function solution(str) {
  const stack = []
  for (let x of str) {
    if (x === '(') {
      stack.push(x)
    } else {
      if (stack.length === 0) {
        console.log('NO')
        return
      } else {
        stack.pop()
      }
    }
  }
  if (stack.length !== 0) {
    console.log('NO')
  } else {
    console.log('YES')
  }
}

for (let i = 1; i < input.length; i++) {
  solution(input[i])
}
