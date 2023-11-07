function solution(arr) {
    var answer = [];
    for(let x of arr) {
        if(x !== answer[answer.length - 1]) {
            answer.push(x)
        }
    }
    return answer;
}