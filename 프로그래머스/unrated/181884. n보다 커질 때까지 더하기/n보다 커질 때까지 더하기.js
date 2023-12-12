function solution(numbers, n) {
    let answer = 0;
    for (let x of numbers) {
        answer += x
        if (answer > n) break
    }
    return answer;
}