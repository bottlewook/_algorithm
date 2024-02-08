const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

function solution(arr) {
  let answer = ''
  const words = arr.split(' ')
  for (let word of words) {
    answer += word.split('').reverse().join('') + ' '
  }
  console.log(answer.trim())
}

for (let i = 1; i < input.length; i++) {
  solution(input[i])
}
