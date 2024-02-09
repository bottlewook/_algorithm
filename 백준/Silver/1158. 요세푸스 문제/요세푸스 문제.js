const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ')
const [n, k] = input

function solution(n, k) {
  const answer = []
  const queue = Array.from({ length: n }, (_, i) => i + 1)
  let count = 1;

  while (queue.length) {
    const shiftItem = queue.shift()
    if (count % k === 0) answer.push(shiftItem)
    else queue.push(shiftItem)
    count++
  }
  console.log(`<${answer.join(', ').trim()}>`)
}

solution(+n, +k)