function solution(my_string, letter) {
    var answer = '';
    for(const x of my_string) {
        if(x === letter) {
            answer +=''
        }else {
            answer += x
        }
    }
    return answer;
}