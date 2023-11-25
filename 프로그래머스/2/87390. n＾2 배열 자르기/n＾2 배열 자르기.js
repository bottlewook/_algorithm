function solution(n, left, right) {
    const answer = [];
    const index = [];
    
    for (let i = left; i <= right; i++) {
        const positionX = Math.floor(i / n);
        const positionY = i % n;
        index.push([positionX, positionY]);
    }
    
    for (let [key, value] of index) {
        answer.push(Math.max(key, value) + 1)
    }

    return answer;
}