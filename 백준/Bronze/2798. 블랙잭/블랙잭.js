const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split("\n")
 
const firstLine = inputs[0].split(" ")
const secondLine = inputs[1].split(" ").map(el => parseInt(el))

const N = parseInt(firstLine[0])
const M = parseInt(firstLine[1])

let sum = 0;

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let l = j + 1; l < N; l++) {
            if (secondLine[i] + secondLine[j] + secondLine[l] <= M) sum = Math.max(sum, secondLine[i] + secondLine[j] + secondLine[l])
        }
    }
}

console.log(sum) 

