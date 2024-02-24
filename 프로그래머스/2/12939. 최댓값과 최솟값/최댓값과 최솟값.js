function solution(s) {
    const temp = s.split(' ').map(Number)
    const [a, b] = [Math.min(...temp), Math.max(...temp)]
    return `${a} ${b}`
}