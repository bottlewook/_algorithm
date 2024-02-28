function solution(array, commands) {
    var answer = [];
    for (let [x, y, z] of commands) {
        let temp = array.slice(x - 1, y).sort((a, b) => a - b)[z - 1]
        answer.push(temp)
    }
    return answer;
}