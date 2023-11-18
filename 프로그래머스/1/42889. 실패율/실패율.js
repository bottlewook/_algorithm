function solution(N, stages) {
    var answer = [];
    
    let map = new Map();
    
    for (let stage of stages) {
        if (map.has(stage)) map.set(stage, map.get(stage) + 1);
        else map.set(stage, 1);
    }
    
    let arr = [];
    
    for (let [key, value] of map) {
        arr.push([key, value])
    }
    
    arr.sort((a, b) => b[0] - a[0]);
    
    console.log(arr)
    return answer;
}