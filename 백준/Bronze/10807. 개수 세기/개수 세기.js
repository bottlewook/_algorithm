const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(item => +item);
const target = Number(input[2]);

let answer = 0;

for (let x of arr) {
    if (x === target) answer++ 
}

console.log(answer)