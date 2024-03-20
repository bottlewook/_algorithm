function isPrime(number) {
    if (number === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }        
    }
    
    return true
}

function solution(nums) {
    const checkList = Array.from({ length: nums.length }, () => 0);
    let answer = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                if (isPrime(sum)) answer++
             }
        }
    }
    
    return answer
}