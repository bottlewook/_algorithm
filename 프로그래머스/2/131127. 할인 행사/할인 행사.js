function solution(want, number, discount) {
    var answer = 0;
    let obj = {};
    let sum = number.reduce((a, b) => a + b, 0)
    
    for (let i = 0; i < want.length; i++) {
        obj[want[i]] = number[i]
    }
    
    for (let i = 0; i <= discount.length - sum; i++) {
        const temp = { ...obj };
        for (let j = i; j < i + sum; j++) {
            if ((temp[discount[j]])) temp[discount[j]]--
        }
        
        let flag = 1;
        
        for (let value of Object.values(temp)) {
            if (value > 0) {
                flag = 0;
                break
            }
        }
        if (flag) answer++
    }
    
    return answer;
}