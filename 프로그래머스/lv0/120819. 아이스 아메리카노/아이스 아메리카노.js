function solution(money) {
    var answer = [];
    let cup = Math.floor(money / 5500)
    let change = money - cup * 5500
    answer.push(cup)
    answer.push(change)
    return answer;
}