function solution(answers) {
    const answer = [];
    let o = 0;
    let t = 0;
    let th = 0;
    const arr = [0, 0, 0]
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    for (let i = 0; i < answers.length; i++) {
        if (one[i % one.length] === answers[i]) o++
        if (two[i % two.length] === answers[i]) t++
        if (three[i % three.length] === answers[i]) th++
    }
    const max = Math.max(o, t, th);
    if (o === max) answer.push(1)
    if (t === max) answer.push(2)
    if (th === max) answer.push(3)
    return answer;
}