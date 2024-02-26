function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let temp =  t.substring(i, i + p.length)  
        if (temp <= p) answer++
    }
    
    return answer;
}