function solution(dirs) {
    let answer = 0;
    const moved = [];
    const control = {
        U: [0, 1],
        R: [1, 0],
        D: [0, -1],
        L: [-1, 0]
    }
    const set = new Set()
    let initial = [0, 0];
    for (let word of dirs) {
        let [x, y] = initial;
        let nx = x + control[word][0];
        let ny = y + control[word][1]
        if (nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5) {
            initial = [nx, ny]
            set.add('' + x + y + nx + ny);
            set.add('' + nx + ny + x + y)
        }
        moved.push(initial)
    }
    
    return set.size / 2
}