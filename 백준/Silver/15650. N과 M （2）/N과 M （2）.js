const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(item => Number(item))
const [a, b] = input


function solution(n, m) {
  // const checkList = Array.from({ length: n }, () => 0)
  const temp = Array.from({ length: m }, () => 0)

  function DFS(level, s) {
    if (level === m) {
      console.log(temp.join(' '))
    } else {
      for (let i = s; i <= n; i++) {
        temp[level] = i
        DFS(level + 1, i + 1)
      }
    }
  }
  DFS(0, 1)
}

solution(a, b)