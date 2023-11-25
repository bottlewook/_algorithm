function solution(clothes) {
    let answer = 1;
    const map = new Map();
    
    for (let cloth of clothes) {
        if (map.has(cloth[1])) map.set(cloth[1], map.get(cloth[1]) + 1);
        else map.set(cloth[1], 1)
    };
    
    for (let [key, value] of map) {
        answer *= (value + 1)
    }
    
    return answer - 1
}