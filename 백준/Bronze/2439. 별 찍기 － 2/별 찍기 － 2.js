const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const count = Number(input);

const arr = Array.from({ length: count }, () => ' ');

for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = '*'
    let temp = arr.join('');
    console.log(temp)
}