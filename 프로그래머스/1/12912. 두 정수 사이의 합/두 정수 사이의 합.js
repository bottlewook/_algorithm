function solution(a, b) {
    var answer = 0;
    const [x, y] = [a, b].sort((a, b) => a - b)
    for (let i = x; i <= y; i++) {
        answer += i
    }
    return answer;
}