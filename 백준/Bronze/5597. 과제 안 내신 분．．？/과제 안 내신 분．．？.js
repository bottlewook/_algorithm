const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(item => Number(item));

const set = new Set();

for (let i = 1; i <= 30; i++) {
    set.add(i)
};

for (let i = 0; i < input.length; i++) {
    set.delete(input[i])
};

const arr = Array.from(set)
arr.sort((a, b) => a - b)
for (let x of arr) {
    console.log(x)
}



