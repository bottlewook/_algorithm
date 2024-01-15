const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(item => Number(item))
function isPrime(num) {
    if (num === 0 || num === 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    
    return true
}

let count = 0;

for (let x of arr) {
    if (isPrime(x)) count++
}

console.log(count)