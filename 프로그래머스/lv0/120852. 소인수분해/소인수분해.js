function isPrime(number) {
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}

function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) answer.push(i)
    }
    return answer;
}