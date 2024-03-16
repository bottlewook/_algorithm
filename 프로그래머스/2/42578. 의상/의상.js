function solution(clothes) {
    let answer = 1;
    const map = new Map();
    for (let [item, type] of clothes) {
        if (!map.has(type)) map.set(type, new Set().add(item))
        else map.set(type, map.get(type).add(item))
    }
    
    for (let [key, value] of map) {
        answer *= (value.size + 1)
    }
    
    return answer - 1
}