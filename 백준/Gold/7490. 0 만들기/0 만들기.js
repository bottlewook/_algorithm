const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

let testCase = Number(input[0])
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]);
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i)
  DFS([], 0)
  console.log()
}

function DFS(result, depth) {
  if (depth === n - 1) {
    let str = ''
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i]
    str += arr[n - 1] + ''
    current = eval(str.split(' ').join(''))
    if (current == 0) console.log(str)
    return
  }
  for (let x of [' ', '+', '-']) {
    result.push(x)
    DFS(result, depth + 1);
    result.pop()
  }
}