const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [length, count] = input[0].split(' ').map(item => Number(item));
const answer = Array.from({ length }, () => 0)

for (let i = 1; i < count + 1; i++) {
  const [s, j, k] = input[i].split(' ').map(item => Number(item));
  for (let n = s - 1; n < j; n++) {
    answer[n] = k
  }
}

let temp = answer.join(' ')
console.log(temp)