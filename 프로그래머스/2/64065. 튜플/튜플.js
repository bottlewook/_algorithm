function solution(s) {
    let arr = [];
    let answer = [];
    
    arr = s.replace(/[{}]/g, '').split(',').map(item => Number(item))
    
    
    const map = new Map();
    
    for (let x of arr) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    
    let newArr = [];
    
    for (let [key, value] of map) {
        newArr.push([key, value])
    }
    
    newArr.sort((a, b) => b[1] - a[1]);
    answer = newArr.map(item => item[0])
    return answer
}