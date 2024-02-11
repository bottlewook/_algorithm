const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const cards = input[1].split(' ').map(Number)
const count = Number(input[2])
const targets = input[3].split(' ').map(Number)


function solution(cards, count, targets) {
  const answer = Array.from({ length: count }, () => 0)
  const map = new Map()
  const set = new Set(cards)
  const temp = Array.from(set)
  temp.sort((a, b) => a - b)
  for (let card of cards) {
    if (map.has(card)) map.set(card, map.get(card) + 1)
    else map.set(card, 1)
  }
  for (let i = 0; i < targets.length; i++) {
    let left = 0;
    let right = set.size - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (temp[mid] === targets[i]) {
        answer[i] = map.get(targets[i])
        break
      } else if (temp[mid] > targets[i]) right = mid - 1
      else left = mid + 1
    }
  }
  console.log(answer.join(' '))
}

solution(cards, count, targets)