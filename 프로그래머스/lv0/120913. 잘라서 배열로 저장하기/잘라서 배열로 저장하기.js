function solution(my_str, n) {
    var answer = [];
    let arr = my_str.split('')
    while(arr.length) {
        answer.push(arr.splice(0, n).join(''))
    }
    return answer;
}