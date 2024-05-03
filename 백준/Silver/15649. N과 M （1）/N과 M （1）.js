const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number);
const checkList = Array.from({ length: N }, () => 0);
const answer = Array.from({ length: M }, () => 0);

function dfs(level) {
  if (level === M) console.log(answer.join(' '))
  else {
    for (let i = 0; i < N; i++) {
      if (checkList[i] === 0) {
        checkList[i] = 1
        answer[level] = i + 1
        dfs(level + 1)
        checkList[i] = 0
      }
    }
  }
}

dfs(0)