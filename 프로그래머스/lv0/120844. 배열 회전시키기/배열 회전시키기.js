function solution(numbers, direction) {
    var answer = numbers;
    let temp
    
    if (direction === 'right') {
        temp = numbers.pop()
        numbers.unshift(temp)
    } else {
        temp = numbers.shift()
        numbers.push(temp)
    }
    
    return answer;
}