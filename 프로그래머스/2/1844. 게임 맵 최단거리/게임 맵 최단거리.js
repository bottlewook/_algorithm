function solution(maps) {
    let answer = 1000

    let n = maps.length;
    let m = maps[0].length
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    
    maps[0][0] = 0;
    let queue = [];
    
    queue.push([0, 0, 1]);
    
    while (queue.length) {
        let [x, y, count] = queue.shift();
        if (x === n - 1 && y === m - 1) answer = Math.min(answer, count)
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, count + 1])
            }
        }
    }
    
    return answer === 1000 ? -1 : answer;
}