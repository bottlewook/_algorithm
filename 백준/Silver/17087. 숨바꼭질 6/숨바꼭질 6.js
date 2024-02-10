const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const targets = input[1].split(' ').map(Number);

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(S, targets) {
    let distances = [];
    for (let i = 0; i < targets.length; i++) {
        distances.push(Math.abs(targets[i] - S));
    }
    let g = distances[0];
    for (let i = 1; i < distances.length; i++) {
        g = gcd(g, distances[i]);
    }
    console.log(g);
}

solution(S, targets);
