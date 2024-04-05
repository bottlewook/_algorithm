const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim()
const n = Number(input)

const checkList = Array.from({ length: n }, () => 0)
const answer = Array.from({ length: n }, () => 0)
function DFS(level) {
  if (level === n) console.log(answer.join(' '))
  else {
    for (let i = 0; i < n; i++) {
      if (checkList[i] === 0) {
        checkList[i] = 1;
        answer[level] = i + 1
        DFS(level + 1)
        checkList[i] = 0;
      }
    }
  }
}

DFS(0)