function solution(numbers) {
    const answer = Array.from({ length: numbers.length }, () => -1)
    const indexs = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (indexs.length && numbers[i] > numbers[indexs.at(-1)]) {
            answer[indexs.pop()] = numbers[i]
        }
        
        indexs.push(i)
    }
    
    return answer;
}