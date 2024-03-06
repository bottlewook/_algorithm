function solution(k, score) {
    const answer = [];
    const temp = [];
    for (let i = 0; i < Math.min(k, score.length); i++) {
        temp.push(score[i])
        answer.push(Math.min(...temp))
    }
    for (let i = k; i < score.length; i++) {
        temp.sort((a, b) => b - a);
        let flag = 0
        for (let j = 0; j < temp.length; j++) {
            if (score[i] >= temp[j]) {
                temp.splice(j, 0, score[i])
                temp.pop()
                answer.push(Math.min(...temp))
                flag = 1
                break
            }
        }
        if (flag === 0) answer.push(Math.min(...temp))
    }
    return answer;
}