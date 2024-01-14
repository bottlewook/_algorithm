const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split('\n').map(item => Number(item));

console.log(a * b)