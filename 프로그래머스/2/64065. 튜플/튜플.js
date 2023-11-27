function solution(s) {
    const answer = [];
    const arr = s.replace(/[{}]/g, '').split(',').map(item => Number(item))

    const map = new Map();
    
    for (let x of arr) {
        if (map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1);
    }
    
    const temp = [];
    
    for (let [key, value] of map) {
        temp.push([key, value])
    }
    
    temp.sort((a, b) => b[1] - a[1]);
    
    for (let [a, b] of temp) {
        answer.push(a)
    }
    
    return answer
}