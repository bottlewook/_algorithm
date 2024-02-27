function solution(s) {
    const answer = Array.from({ length: s.length }, () => -1);
    for (let i = 0; i < s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                answer[i] = i - j
                break
            }
        }
    }
    
    return answer;
}