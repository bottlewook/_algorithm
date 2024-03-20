function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => {
        return {
            priority, index
        }
    })
    
    while (queue.length > 0) {
        const current = queue.shift();
        const max = queue.some(item => item.priority > current.priority);
        
        if (max) {
            queue.push(current)
        } else {
            answer++
            if (current.index === location) break
        }
    }
        
    return answer
}