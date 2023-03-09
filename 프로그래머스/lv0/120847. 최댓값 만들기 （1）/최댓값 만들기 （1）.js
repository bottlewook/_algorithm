function solution(numbers) {
    let index = numbers.length - 1
    numbers.sort((a, b) => a - b);
    return numbers[index] * numbers[index - 1]
}