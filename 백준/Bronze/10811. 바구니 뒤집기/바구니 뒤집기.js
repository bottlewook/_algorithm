const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, count] = input[0].split(' ').map(item => Number(item));

const arr = Array.from({ length }, (_, i) => i + 1);

for (let i = 1; i <= count; i++) {
  const [left, right] = input[i].split(' ').map(item => Number(item));
  const temp = arr.slice(left - 1, right).reverse();
  for (let j = left - 1; j < right; j++) {
    arr[j] = temp[j - left + 1]
  }
}

console.log(arr.join(' '))