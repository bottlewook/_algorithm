function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    
    let start = 0;
    let end = queue1.length;
    
    const target = (sum1 + sum2) / 2;
    const q = [...queue1, ...queue2];
    
    for (let count = 0; count < queue1.length * 3; count++) {
        if (sum1 === target) return count
        if (sum1 > target) sum1 -= q[start++];
        else sum1 += q[end++]
    }
    
    return -1;
}