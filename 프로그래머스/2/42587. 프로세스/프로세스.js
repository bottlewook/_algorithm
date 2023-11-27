function solution(priorities, location) {
    const answer = [];
    const queue = Array.from({ length: priorities.length }, () => 0);
    
    for (let i = 0; i < queue.length; i++) {
        queue[i] = [String.fromCharCode(i + 65) ,priorities[i]]
    }; 
    
    while (queue.length) {
        const value = queue.shift();
        
        let flag = 1;
        for (let i = 0; i < queue.length; i++) {
            if (value[1] < queue[i][1]) flag = 0;
        }
        if (flag) answer.push(value)
        else queue.push(value)
    }
    
    for (let i = 0; i < answer.length; i++) {
        if (location === answer[i][0].charCodeAt() - 65) return i + 1
    }
}