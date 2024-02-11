const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const card = input[1].split(' ').map(Number)
const count = Number(input[2])
const targets = input[3].split(' ').map(Number)


function solution(card, count, targets) {
  card.sort((a, b) => a - b)
  const answer = Array.from({ length: count }, () => 0)
  for (let i = 0; i < count; i++) {
    let left = 0;
    let right = card.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (card[mid] > targets[i]) right = mid - 1
      else if (card[mid] < targets[i]) left = mid + 1
      else {
        answer[i] = 1
        break
      }
    }
  }
  console.log(answer.join(' '))
}

solution(card, count, targets)