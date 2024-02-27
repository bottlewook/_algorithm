function solution(brown, yellow) {
    const answer = [];
    const total = brown + yellow
    for (let col = 1; col <= total; col++) {
        const row = total / col
        const edge = col * 2 + (row - 2) * 2 
        if (brown === edge) {
            answer.push(row)
            answer.push(col)
            break
        }
    }
    return answer;
}