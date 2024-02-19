const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [a, b] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

function solution(a, b, arr) {
  const temp = Array.from({ length: b }, () => 0)
  arr.sort((a, b) => a - b)
  function DFS(level) {
    if (level === b) {
      console.log(temp.join(' '))
    } else {
      for (let i = 0; i < a; i++) {
        temp[level] = arr[i]
        if (temp[level - 1] < temp[level] || temp[level - 1] == null) {
          DFS(level + 1)
        }
      }
    }
  }

  DFS(0)
}

solution(a, b, arr);
