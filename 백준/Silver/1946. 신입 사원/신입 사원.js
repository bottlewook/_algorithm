const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

let testCase = Number(input[0])
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line])
  let arr = []
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data)
  }
  arr.sort((a, b) => a[0] - b[0])
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y
      count++
    }
  }
  console.log(count)
  line += n + 1
}