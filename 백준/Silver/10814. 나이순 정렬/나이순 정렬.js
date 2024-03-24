const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '))
}

arr.sort((a, b) => {
  if (+a !== +b) {
    return +a[0] - +b[0]
  }
})

let answer = ''
for (let x of arr) {
  answer += x.join(' ') + '\n'
}

console.log(answer)