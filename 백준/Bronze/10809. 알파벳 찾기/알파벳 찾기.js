const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

const answer = Array.from({ length: 26 }, () => -1);

for (let i = 0; i < input.length; i++) {
  let code = input[i].charCodeAt();
  if (answer[code - 97] === -1) answer[code - 97] = i
}

console.log(answer.join(' '))

