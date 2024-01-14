const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [length, count] = input[0].split(' ').map(item => Number(item));
const arr = Array.from({ length }, (_, i) => i + 1);

for (let i = 1; i <= count; i++) {
    let [a, b] = input[i].split(' ').map(item => Number(item));
    let temp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp
}

console.log(arr.join(' '))