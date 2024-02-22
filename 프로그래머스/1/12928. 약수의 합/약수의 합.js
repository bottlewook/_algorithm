function solution(n) {
    var answer = 0;
    const arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr.push(i)
    }
    return arr.reduce((a, b) => a + b, 0)
}