const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(item => Number(item))
const [a, b] = input


function solution(n, m) {
  let ch = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: m }, () => 0);;
  function DFS(L) {
    if (L === m) {
      console.log(temp.join(' '))
    }
    else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = i + 1
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
}

solution(a, b)