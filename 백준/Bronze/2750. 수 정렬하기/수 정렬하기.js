const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = [];
for (let i = 1; i < input.length; i++) {
    arr.push(input[i])
}
arr.sort((a, b) => a - b)
for (let x of arr) console.log(x)