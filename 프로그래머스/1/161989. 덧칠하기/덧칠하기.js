function solution(n, m, section) {
    let answer = 1;
    let index = 0;
    while (index < section.length - 1) {
        let start = section[index];
        let end = start + m - 1;
        index = section.findIndex(item => item > end );
        if (index === -1) break
        answer++
    }
    
    return answer;
}