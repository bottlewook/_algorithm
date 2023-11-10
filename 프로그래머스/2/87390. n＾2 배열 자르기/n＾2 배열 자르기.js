function solution(n, left, right) {
    let answer = []
    
    for (let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        
        if (row >= col) answer.push(row + 1)
        else answer.push(col + 1)
    }
    
    return answer
}