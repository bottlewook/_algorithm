function solution(numbers) {
    let sum = 0
    let length = numbers.length
    for(let x of numbers) {
        sum += x
    }
    return sum / length
}