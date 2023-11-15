// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

/* readline Module */

// 문제 풀이
function solution(input) {
    const [A, B, C] = input
	// 답변 출력, list
	console.log((A + B) % C);
	console.log(((A % C) + (B % C)) % C);
	console.log((A * B) % C,);
	console.log(((A % C) * (B % C)) % C);
    
   
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
    list = input.split(' ').map((el) => Number(el));

    solution(list); // 문제 풀이 함수 호출
    process.exit(); // 프로세스 종료
});