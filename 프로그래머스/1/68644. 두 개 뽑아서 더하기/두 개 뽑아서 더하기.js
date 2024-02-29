function solution(numbers) {
    const set = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length && i !== j; j++) {
            set.add(numbers[i] + numbers[j])
        }
    }
    const answer = Array.from(set).sort((a, b) => a - b)
    return answer;
}