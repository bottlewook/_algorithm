function solution(word) {
    let answer = 0;
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    const weight = [781, 156, 31, 6, 1]; // 각 자리수별 가중치 계산: 5^0 + 5^1 + 5^2 + 5^3 + 5^4

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (word[i] === alpha[j]) {
                // 알파벳의 위치(0~4) * 해당 자리의 가중치 + 1(자기 자신 포함)
                answer += j * weight[i] + 1;
                break; // 일치하는 알파벳을 찾았으므로 내부 반복문 종료
            }
        }
    }

    return answer;
}
