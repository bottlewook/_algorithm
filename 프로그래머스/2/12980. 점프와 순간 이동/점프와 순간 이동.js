function solution(n) {
    var answer = 0;
    while(n > 0) {
        if (n % 2) {
            n = n - 1;
            answer++
        }
        n /= 2
    }
    
    return answer;
}