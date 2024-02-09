const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().split(' ')

let answer = []
function solution(words) {
  let temp = ''
  for (let word of words) {
    let index = word.charCodeAt()
    let index13 = index + 13
    if (index >= 65 && index <= 90) {
      if (index13 <= 90) {
        temp += String.fromCharCode(index13)
      } else {
        temp += String.fromCharCode(65 + (index13 - 91))
      }
    } else if (index >= 97 && index <= 122) {
      if (index13 <= 122) {
        temp += String.fromCharCode(index13)
      } else {
        temp += String.fromCharCode(97 + (index13 - 123))
      }
    } else {
      temp += word.toString()
    }
  }
  answer.push(temp)
}
for (let i = 0; i < input.length; i++) {
  solution(input[i])
}
console.log(answer.join(' '))