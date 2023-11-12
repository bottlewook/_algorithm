function solution(num_list) {
    var answer = [...num_list];
    let first = num_list[num_list.length - 1];
    let second = num_list[num_list.length - 2]
    
    if (first > second) answer.push(first - second)
    else answer.push(first * 2)
    
    return answer;
}