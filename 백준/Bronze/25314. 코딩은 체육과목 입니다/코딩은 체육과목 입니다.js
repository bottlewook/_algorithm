const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const count = Number(input) / 4;

let answer = '';

for (let i = 1; i <= count; i++) {
    answer += 'long '
}

console.log(answer + 'int')