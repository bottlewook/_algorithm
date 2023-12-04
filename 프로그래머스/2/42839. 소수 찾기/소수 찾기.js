function isPrime(number) {
    if (number === 0 || number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    
    return true
}

function solution(numbers) {
    let answer = 0;
    const checkList = Array.from({ length: numbers.length }, () => 0);
    const arr = numbers.split('');
    const set = new Set();
    
    function DFS(level, word) {
        if (word !== '') set.add(Number(word))
        if (level === numbers.length) return
        else {
            for (let i = 0; i < checkList.length; i++) {
                if (checkList[i] === 0) {
                    checkList[i] = 1;
                    DFS(level + 1, word + String(numbers[i]));
                    checkList[i] = 0;
                }
            }    
        }
    }
    
    DFS(0, '')
    
    for (let x of set) {
        if (isPrime(x)) answer++
    }
    
    
    return answer;
}