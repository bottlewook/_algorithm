const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

const count = Number(input);

for (let i = 1; i <= count; i++) {
    let temp = '';
    for (let j = 1; j <= i; j++) {
        temp += '*'
    }
    console.log(temp)
}