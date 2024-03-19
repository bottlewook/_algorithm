function divisor(num) {
    let count = 0;

    // num = 9
    // 1, 3, 3, 9
    for(let i=1; i<=Math.sqrt(num); i++) {
        // 3 약수 중복 방지
        if(i === Math.sqrt(num)) {
            count += 1;
        } 
        // 1, 9
        else if(num % i == 0) {
            count += 2;
        }
    }
    return count;
}

function solution(number, limit, power) {
    let answer = 0
    for (let i = 1; i <= number; i++) {
        let temp = divisor(i)
        if (temp > limit) answer += power
        else answer += temp
    }
    return answer
}