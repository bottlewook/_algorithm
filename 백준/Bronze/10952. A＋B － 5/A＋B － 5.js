const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = input.length;

for (let i = 0; i < length; i++) {
    const [a, b] = input[i].split(' ').map(item => Number(item));
    const sum = a + b;
    if (sum === 0) break;
    console.log(sum)
}