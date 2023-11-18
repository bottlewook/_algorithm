function solution(n, lost, reserve) {
    var answer = 0;
    // 0부터 시작 조심
    let reserveClothes = Array.from({ length: n + 1}, () => 1);
    
    for (let i = 0; i < lost.length; i++) {
        reserveClothes[lost[i]] = 0;
    }
    
    for (let i = 0; i < reserve.length; i++) {
        if (reserveClothes[reserve[i]] === 0) reserveClothes[reserve[i]] = 1
        else reserveClothes[reserve[i]] = 2
    }
    
    
    for (let i = 1; i <= reserveClothes.length; i++) {
        if (reserveClothes[i] === 2) {
            if (reserveClothes[i - 1] === 0) {
                reserveClothes[i] = 1;
                reserveClothes[i - 1] = 1;
                continue;
            } 
            if (reserveClothes[i + 1] === 0) {
                reserveClothes[i] = 1;
                reserveClothes[i + 1] = 1;
            } 
            
        }
    };
    
    for (let i = 1; i < reserveClothes.length; i++) {
        if (reserveClothes[i] !== 0) answer++
    }
    
    return answer;
}