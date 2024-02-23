function divisor(num) {
    let answer = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) answer++
    }
    return answer % 2 === 0
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (divisor(i)) answer += i
        else answer -= i
    }
    return answer;
}