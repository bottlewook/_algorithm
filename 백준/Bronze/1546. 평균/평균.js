const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = Number(input[0])
const arr = input[1].split(' ').map(item => Number(item));

const max = Math.max(...arr);

const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum / max / count * 100)