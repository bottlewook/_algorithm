const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const target = +input[0].split(' ')[1];
const arr = input[1].split(' ').map(item => Number(item));

for (let x of arr) {
    if (x < target) {
        console.log(x + '')
    }
}
