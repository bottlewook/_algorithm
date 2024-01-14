const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().split(' ').map(item => Number(item));

console.log(Math.min(x, y, w - x, h - y));