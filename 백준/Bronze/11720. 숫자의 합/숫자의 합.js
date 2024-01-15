const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split('').map(item => Number(item));

let sum = 0;

for (let x of arr) {
    sum += x
}

console.log(sum)