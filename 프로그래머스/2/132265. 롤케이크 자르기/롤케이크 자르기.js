function solution(topping) {
    let answer = 0;
    const map1 = new Map();
    const map2 = new Map();
    
    for (let x of topping) {
        map2.set(x, map2.get(x) + 1 || 1)
    }

    for (let x of topping) {
        map1.set(x, map1.get(x) + 1 || 1)
        if (map2.get(x) > 1) {
            map2.set(x, map2.get(x) - 1)
        } else {
            map2.delete(x)
        }
        
        if (map1.size === map2.size) answer++
    }
    
    return answer
}