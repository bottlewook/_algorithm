const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(item => Number(item));

const [number, index] = input;

const arr = []
for (let i = 1; i <= number; i++) {
    if (number % i === 0) arr.push(i)
}

console.log(!arr[index - 1] ? 0 : arr[index - 1])