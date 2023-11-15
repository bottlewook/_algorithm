function solution(nums) {
    let n = nums.length / 2;
    let answer = 0;
    let map = new Map();
    
    for (let x of nums) {
        if (map.has(x)) map.set(x, map.get(x) + 1) 
        else map.set(x, 1)
    };
    
    for (let [key, value] of map) {
        answer++
    }
    
    return answer >= n ? n : answer
}