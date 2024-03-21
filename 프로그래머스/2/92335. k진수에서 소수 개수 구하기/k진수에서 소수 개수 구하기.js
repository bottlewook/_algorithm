function isPrime(number) {
    if (number === 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}

function solution(n, k) {
    let answer = 0;
    let temp = n.toString(k).split('0');
    for (let x of temp) {
        if (x == 1 || x == '') continue;
        else {
            if (isPrime(x)) answer++
        }
    }
    
    
    return answer;
}