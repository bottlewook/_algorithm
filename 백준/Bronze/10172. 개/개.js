/* readline Module */

// 문제 풀이
function solution(input) {
	
	// 답변 출력
	console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|
`)

}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

 
let input;

rl.on("line", function (line) {
    
    input = line;           // 입력받은 문자열, line
    input = parseInt(line); // 형변환, parseInt
    rl.close();             // 입력 종료

}).on("close", function () {

    solution(input); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});