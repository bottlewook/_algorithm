const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const length = input.length;

for (let i = 0; i < length; i++) {
    if (!input[i]) break;
    const [a, b] = input[i].split(' ').map(item => Number(item));
    console.log(a + b)
}