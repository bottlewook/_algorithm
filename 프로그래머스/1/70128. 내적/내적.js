function solution(a, b) {
    var answer = 1
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i]
    }
    return answer - 1
}