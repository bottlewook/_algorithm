const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = Number(fs.readFileSync(readFileSyncAddress).toString().trim())

function solution(num) {
  let index = 2
  while (num !== 1) {
    if (num % index === 0) {
      num /= index
      console.log(index)
    } else {
      index++
    }
  }
}

solution(input)