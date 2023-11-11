function solution(clothes) {
    let answer = 1;
    
    let map = new Map();
    
    for (let [key, value] of clothes) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    
    for (let [key, value] of map) {
        answer *= (value + 1)
    } 
    
    
    return answer - 1
}