function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);
    while (true) {
        if (score.length < m) break
        let temp = score.splice(-m);
        answer += Math.min(...temp) * m
    }
    return answer
}