const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const length = input.length
let time = []

for (let i = 1; i < length; i++) {
  let temp = input[i].split(' ').map(Number)
  time.push(temp)
}

time.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0]
  else return a[1] - b[1]
})

let endTime = time[0][1];

let answer = 1;

for (let i = 1; i < time.length; i++) {
  let startTime = time[i][0]
  if (endTime <= startTime) {
    endTime = time[i][1]
    answer++
  }
}
console.log(answer)