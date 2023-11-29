function isPrime(number) {
    if (number === 1 || number === 0) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    
    return true
}

function solution(n, k) {
    let answer = 0;
    const binary = n.toString(k).split(0).map(item => Number(item))
    
    for (let x of binary) {
        if (isPrime(x)) answer++
    }
    
    
    return answer;
}