function solution(n) {
    var answer = 0;
    let str = String(n)
    arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        answer += +arr[i]
    }
    return answer;
}