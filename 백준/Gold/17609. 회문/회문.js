const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

function palindrome(x) {
  return x == x.split('').reverse().join('')
}

let testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let data = input[tc];
  if (palindrome(data)) console.log(0);
  else {
    let found = false;
    let n = data.length;
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] !== data[n - i - 1]) {
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true
        break
      }
    }
    if (found) console.log(1)
    else console.log(2)
  }
}