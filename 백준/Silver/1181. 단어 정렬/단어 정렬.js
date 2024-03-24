const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const set = new Set()
for (let i = 1; i < input.length; i++) {
  set.add(input[i])
}

const arr = [...set]
arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length
  else {
    if (a < b) return - 1
    else if (a > b) return 1
    else 0
  }
})

let answer = ''
for (let x of arr) {
  answer += x + '\n'
}

console.log(answer)