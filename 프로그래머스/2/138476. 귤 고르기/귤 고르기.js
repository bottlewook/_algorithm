function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    for (let x of tangerine) {
        if (map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1)
    }
    
    const temp = []
    
    for (let [key, value] of map) {
        temp.push([key, value])
    }
    
    temp.sort((a, b) => b[1] - a[1])
    
    for (let [key, value] of temp) {
        if (k < 1) break
        answer++
        k -= value
    }
    
    return answer;
}