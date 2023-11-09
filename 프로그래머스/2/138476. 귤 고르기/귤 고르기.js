function solution(k, tangerine) {
    let answer = 1;
    let map = new Map();
    
    for (let x of tangerine) {
        if (!map.get(x)) {
            map.set(x, 1)
        } else {
            map.set(x, map.get(x) + 1)
        }
    }
    
    let temp = []
    
    for (let [key, value] of map) {
        if (value >= k) return 1
        temp.push([key, value])
    }
    
    temp.sort((a, b) => b[1] - a[1])
    
    temp.forEach((item) => {
        k -= item[1];
        if (k <= 0) return answer
        answer++
    })
    
    return answer
}