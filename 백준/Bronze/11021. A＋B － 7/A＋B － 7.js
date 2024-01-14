const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
    const [a, b] = input[i].split(' ').map(item => Number(item));
    console.log(`Case #${i}: ${a + b}`)
}