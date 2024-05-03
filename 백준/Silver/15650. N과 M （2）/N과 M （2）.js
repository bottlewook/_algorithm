const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number);
const answer = Array.from({ length: M }, () => 0)

function dfs(level, s) {
  if (level === M) console.log(answer.join(' '));
  else {
    for (let i = s + 1; i <= N; i++) {
      answer[level] = i
      dfs(level + 1, i)
    }
  }
}

dfs(0, 0)