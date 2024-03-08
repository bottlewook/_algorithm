function solution(want, number, discount) {
    let answer = 0;
    const obj = {};
    for (let i = 0; i < want.length; i++) {
        obj[want[i]] = number[i]
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const temp = {...obj};
        for (let j = i; j < 10 + i; j++) {
            if (temp[discount[j]] > 0) temp[discount[j]]--
            else break;
        }
        let flag = 1;
        const a = Object.values(temp)
        for (let x of a) {
            if (x !== 0) flag = 0
        }
        if (flag) answer++
    }
    
    return answer;
}