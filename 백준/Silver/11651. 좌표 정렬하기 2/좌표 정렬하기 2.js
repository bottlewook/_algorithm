const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
let [N, ...arr] = input
const temp = [];
for (let x of arr) {
  temp.push(x.split(' ').map(Number))
}

temp.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let answer = ''
for (let x of temp) {
  answer += x.join(' ') + '\n'
}
console.log(answer)