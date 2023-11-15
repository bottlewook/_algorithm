function solution(answers) {
    var answer = [];
    
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
    
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === person1[i % person1.length]) answer1++
        if (answers[i] === person2[i % person2.length]) answer2++
        if (answers[i] === person3[i % person3.length]) answer3++
    };
    
    let newArr = [answer1, answer2, answer3];
    let max = Math.max(...newArr)
    const map = new Map();
    
    for (let i = 0; i < newArr.length; i++) {
        map.set(i + 1, newArr[i])
    }
    
    for (let [key, value] of map) {
        if (max === value) answer.push(key)
    }
    
    return answer;
}