function solution(numbers) {
    const answer = Array.from({ length: numbers.length}, () => -1);
    const indexs = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (indexs.length && numbers[indexs.at(-1)] < numbers[i]) {
            answer[indexs.pop()] = numbers[i]
        }
        
        indexs.push(i)
    }
    
    return answer;
}