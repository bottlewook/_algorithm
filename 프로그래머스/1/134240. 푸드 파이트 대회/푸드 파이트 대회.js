function solution(food) {
    let answer = ''
    const foodArr = []
    for (let i = 1; i < food.length; i++) {
        foodArr.push(food[i] % 2 === 0 ? food[i] / 2 : (food[i] - 1) / 2)
    }
    
    for (let i = 0; i < foodArr.length; i++) {
        for (let j = 1; j <= foodArr[i]; j++) {
            answer += (i + 1)
        }
    }
    
    const reverse = answer.split('').reverse().join('')
    
    return answer + '0' + reverse
}