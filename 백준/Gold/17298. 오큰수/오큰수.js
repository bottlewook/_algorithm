const fs = require("fs");
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

let [n, ...numbers] = input;
n = Number(n);
numbers = numbers[0].split(" ").map((i) => Number(i));
solution(n, numbers);

function solution(n, numbers) {
  let stack = [];
  for (let i = 0; i < n; i += 1) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      numbers[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    numbers[stack.pop()] = -1;
  }

  console.log(numbers.join(" "));
}