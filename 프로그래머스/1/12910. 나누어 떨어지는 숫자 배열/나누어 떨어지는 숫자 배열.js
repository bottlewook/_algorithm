function solution(arr, divisor) {
    const answer = []
    arr.sort((a, b) => a - b)
    for (let x of arr) {
        if (x % divisor === 0) answer.push(x)
    }
    return answer.length > 0 ? answer : [-1]
}