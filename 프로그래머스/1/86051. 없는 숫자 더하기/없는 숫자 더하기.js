function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const answer = []
    for (let i = 0; i <= 9; i++) {
        if (numbers.includes(i) === false) answer.push(i)
    }
    
    return answer.reduce((a, b) => a + b, 0)
}