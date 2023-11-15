/* readline Module */

// 문제 풀이
function solution(input) {
	// 답변 출력, list
	console.log(input + '??!');
   
}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input;
let list = [];

rl.on("line", function (line) {

    input = line; // 입력받은 문자열, line
    rl.close();   // 입력 종료
    
}).on("close", function () {

    // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입

    solution(input); // 문제 풀이 함수 호출
    process.exit(); // 프로세스 종료
});