const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let target = Number(input[0]);

let answer = 0;

while (target > 0) {
  if (target % 5 === 0) {
    answer += target / 5;
    break;
  };

  target -= 3
  answer++
}

if (target < 0) console.log(-1)
else console.log(answer)