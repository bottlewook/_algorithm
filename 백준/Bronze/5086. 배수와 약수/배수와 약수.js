const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = input.length;

for (let i = 0; i < length - 1; i++) {
  const [a, b] = input[i].split(' ').map(item => Number(item));
  if (a < b && b % a === 0) console.log('factor');
  else if (a > b && a % b === 0) console.log('multiple')
  else console.log('neither')
}