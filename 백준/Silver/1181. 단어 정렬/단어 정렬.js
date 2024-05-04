const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = Number(input[0]);

let set = new Set()

for (let i = 1; i <= N; i++) {
  set.add(input[i].trim())
}

const arr = [...set]

arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return - 1
    else if (a > b) return 1
    else 0
  }
  else return a.length - b.length
})

let answer = ''

arr.forEach((item) => {
  answer += item + '\n'
})

console.log(answer.trim())