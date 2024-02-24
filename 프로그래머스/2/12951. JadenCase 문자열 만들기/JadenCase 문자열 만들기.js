function solution(s) {
    const answer = [];
    const temp = s.split(' ');
    for (let x of temp) {
        let str = ''
        for (let i = 0; i < x.length; i++) {
            if (i === 0 && isNaN(x[i])) str += x[i].toUpperCase()
            else if (!isNaN(x[i])) str += x[i]
            else str += x[i].toLowerCase()
        }
        answer.push(str)
    }
    return answer.join(' ')
}