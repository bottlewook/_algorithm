const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const target = +input[2]
const arr = input[1].split(' ').map(Number)

function solution(nums, target) {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      count++;
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  console.log(count)
}

solution(arr, target);
