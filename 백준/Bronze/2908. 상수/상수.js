const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b] = input;

const reverseA = a.toString().split('').reverse().join('')
const reverseB = b.toString().split('').reverse().join('')

console.log(Math.max(Number(reverseA), Number(reverseB)))