const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('')

function solution(words) {
  const map = new Map()
  let answer = ''
  for (let i = 0; i <= 25; i++) {
    map.set(String.fromCharCode(i + 97), 0)
  }

  for (let word of words) {
    map.set(word, map.get(word) + 1)
  }

  for (let [key, value] of map) {
    answer += String(value) + ' '
  }
  console.log(answer.trim())
}

solution(input)