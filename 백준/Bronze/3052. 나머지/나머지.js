const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(item => Number(item));
const set = new Set();

for (let x of input) {
    set.add(x % 42)
}

console.log(set.size)
