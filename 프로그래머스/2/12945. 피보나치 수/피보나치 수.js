function solution(n) {
    const checkList = Array.from({ legnth: 100001 }, () => 0);
    
    checkList[0] = 0;
    checkList[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        checkList[i] = (checkList[i - 1] + checkList[i - 2]) % 1234567
    }
    
    return checkList[n]
}