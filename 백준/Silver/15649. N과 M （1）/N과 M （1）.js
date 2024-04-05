const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(Number)
const [N, M] = input
const checkList = Array.from({ length: N }, () => 0)
const answer = Array.from({ length: M }, () => 0)

function DFS(level) {
  if (level === M) console.log(answer.join(' '))
  else {
    for (let i = 0; i < N; i++) {
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