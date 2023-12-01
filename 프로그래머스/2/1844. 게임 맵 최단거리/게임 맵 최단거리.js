function solution(maps) {
    let answer = 1000
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
   
    const queue = [[0, 0, 1]];
    
    while (queue.length) {
        const [x, y, level] = queue.shift();
        if (x === maps.length - 1 && y === maps[0].length - 1) answer = Math.min(answer, level)
        
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
        
            if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length &&  maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, level + 1])
            }
        }
    }
    
    return answer === 1000 ? -1 : answer
}