const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  for (let x of a) {
    for (let y of b) {
      if (x <= y) {
        break
      } else {
        answer++
      }
    }
  }
  console.log(answer)
}

for (let i = 2; i < input.length; i += 3) {
  let arrA = input[i].split(' ').map(Number)
  let arrB = input[i + 1].split(' ').map(Number)
  solution(arrA, arrB);
}
