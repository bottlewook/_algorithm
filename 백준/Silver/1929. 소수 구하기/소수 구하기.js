const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(" ");

let [a, b] = input
a = Number(a)
b = Number(b)

function isPrime(num) {
  if (num === 0 || num === 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

function solution(x, y) {
  for (let i = x; i <= y; i++) {
    if (isPrime(i)) {
      console.log(i)
    }
  }
}

solution(a, b)