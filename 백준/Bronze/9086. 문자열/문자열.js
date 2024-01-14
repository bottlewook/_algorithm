const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
    console.log(input[i][0] + input[i][input[i].length - 1])
}