function solution(sides) {
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    for(let x of sides) {
        sum += x
        max = Math.max(max, x)
    }
    return max < sum / 2 ? 1 : 2
}