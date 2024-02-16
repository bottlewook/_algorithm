const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(Number)
const [a, b] = input

function solution(a, b) {
  let temp = Array.from({ length: b }, () => 0)
  function DFS(level) {
    if (level === b) {
      console.log(temp.join(' '))
    } else {
      for (let i = 1; i <= a; i++) {
        temp[level] = i
        if (temp[level - 1] <= temp[level] || temp[level - 1] == null) {
          DFS(level + 1)
        }
      }
    }
  }
  DFS(0)
}

solution(a, b);
