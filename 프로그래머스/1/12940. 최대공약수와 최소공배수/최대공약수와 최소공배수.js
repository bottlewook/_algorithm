function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }
    return a
}

function solution(n, m) {
    let answer = []
    let temp = GCD(n, m)
    answer.push(temp);
    answer.push(n * m / temp)
    return answer;
}