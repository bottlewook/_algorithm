function solution(k, tangerine) {
    let answer = 0;
    
    const map = new Map();
    
    for (let i = 0; i < tangerine.length; i++) {
        if (map.has(tangerine[i])) {
            map.set(tangerine[i], map.get(tangerine[i]) + 1)
        } else {
            map.set(tangerine[i], 1)
        }
    }
    
    const tangerineArr = [];
    
    for (let [key, value] of map) {
        tangerineArr.push([key, value])
    }
    
    tangerineArr.sort((a, b) => b[1] - a[1])
    
    for (let i = 0; i < tangerineArr.length && k > 0; i++) {
        k -= tangerineArr[i][1]
        answer++
    }
    
    return answer;
}