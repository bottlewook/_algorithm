const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number)
const sort = [...new Set(arr)].sort((a, b) => a - b)
const map = new Map();
for (let i = 0; i < sort.length; i++) {
  map.set(sort[i], i)
}

const answer = []

for (let x of arr) {
  answer.push(map.get(x))
}



console.log(answer.join(' '))