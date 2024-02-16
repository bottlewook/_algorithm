const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [a, b] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

function solution(a, b, arr) {
  const temp = Array.from({ length: b }, () => 0)
  const checkList = Array.from({ length: a }, () => 0)
  function DFS(level) {
    if (level === b) {
      console.log(temp.join(' '))
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkList[i] === 0) {
          checkList[i] = 1;
          temp[level] = arr[i]
          DFS(level + 1)
          checkList[i] = 0;
        }
      }
    }
  }

  DFS(0)
}

solution(a, b, arr);
