const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let result = 0;
let eraseCount = 0;
for (let start = 0, end = 0; start < N; start++) {
  while (end < N) {
    if (arr[end] % 2 === 0) { // 짝수인 경우 end 중가
      end++
    } else { // 홀수인 경우
      if (eraseCount === K) break // 더 저울 수 없다면 종료
      // 지울 수 있는 여건이 있다면 지우기
      eraseCount++
      end++
    }
  }
  result = Math.max(result, end - start - eraseCount)
  if (arr[start] % 2 === 1) eraseCount--
}

console.log(result)