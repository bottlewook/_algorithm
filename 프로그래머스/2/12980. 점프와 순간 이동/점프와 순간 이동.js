function solution(n) {
    let answer = 0;

    while (n !== 0) {
        if (n % 2 === 1) {
            answer++
            n = (n - 1) / 2
        } else n /= 2
    }

    return answer;
}