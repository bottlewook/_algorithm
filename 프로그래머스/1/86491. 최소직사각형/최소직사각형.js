function solution(sizes) {
    var answer = 0;
    const temp = [];
    let maxX = Number.MIN_SAFE_INTEGER
    let maxY = Number.MIN_SAFE_INTEGER
    for (let [x, y] of sizes) {
        temp.push([Math.min(x, y), Math.max(x, y)]);
    }
    for (let [x, y] of temp) {
        maxX = Math.max(x, maxX)
        maxY = Math.max(y, maxY)
    }
    
    return maxX * maxY
}