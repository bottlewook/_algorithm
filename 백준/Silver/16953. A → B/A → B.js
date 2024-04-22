const fs = require("fs");
const readFileSyncAddress = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ').map(Number);

let [a, b] = input;
let answer = 0;

while (a < b) {
    if (b % 10 === 1) {
        // 1로 끝나는 경우, 1을 제거합니다.
        b = Math.floor(b / 10);
    } else if (b % 2 === 0) {
        // 2로 나눌 수 있는 경우, 2로 나눕니다.
        b /= 2;
    } else {
        // 위의 두 조건에 해당하지 않는 경우, A를 B로 만들 수 없습니다.
        break;
    }
    answer++;
}

// 최종적으로 b가 a와 같다면, 연산 횟수에 1을 더한 값을 출력합니다.
// 그렇지 않다면, -1을 출력합니다.
console.log(a === b ? answer + 1 : -1);
