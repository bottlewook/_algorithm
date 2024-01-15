const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const [repeatCount, words] = input[i].split(' ')
  let temp = '';
  for (let word of words) {
    for (let i = 0; i < Number(repeatCount); i++) {
      temp += word
    }
  }
  console.log(temp)
}