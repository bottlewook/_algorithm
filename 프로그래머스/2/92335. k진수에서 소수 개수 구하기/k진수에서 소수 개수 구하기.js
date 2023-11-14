function isPrime(number) {
    if (number === 1 || number === 0) return false;
    
    for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
        if (number % i === 0) return false
    }
    
    return true
}

function solution(n, k) {
    let answer = 0
    const value = n.toString(k)
    const newArr = value.split('0');
    
    for (let x of newArr) {
        if (isPrime(Number(x))) answer++
     }
  
    return answer;
}