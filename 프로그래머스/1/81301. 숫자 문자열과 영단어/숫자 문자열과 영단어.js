function solution(s) {
    const map = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };

    let answer = '';
    let temp = '';

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            // 숫자인 경우
            answer += s[i];
        } else {
            // 문자인 경우 temp에 추가
            temp += s[i];

            // temp가 map에 존재하면 해당 숫자를 answer에 추가하고 temp 초기화
            if (map[temp]) {
                answer += map[temp];
                temp = '';
            }
        }
    }

    return parseInt(answer);
}
