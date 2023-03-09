function solution(num_list) {
    let answer = [];
    let odd = 0;
    let even = 0;
    for(const x of num_list) {
        if(x % 2) {
            odd++
        } else {
            even++
        }
    }
    answer.push(even)
    answer.push(odd)
    return answer
}