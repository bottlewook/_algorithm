function solution(d, budget) {
    d.sort((a, b) => a - b)
    let answer = 0;
    for (let x of d) {
        if (budget >= x) {
            answer++
            budget -= x
        } else break
    }
    return answer;
}