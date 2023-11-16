function solution(k, score) {
    let answer = [];
    let queue = [];
    
    for (let i = 0; i < k && answer.length < score.length; i++) {
        queue.push(score[i])
        answer.push(Math.min(...queue))
    }
    
    queue.sort((a, b) => a - b);
    
    for (let i = k; i < score.length; i++) {
        let index = -1;
        
        for (let j = 0; j < queue.length; j++) {
            if (queue[j] <= score[i]) index = j;
        }
        
        if (index !== -1) {
            for (let k = 0; k < index; k++) {
                queue[k] = queue[k + 1];
            }
                
            queue[index] = score[i];
        } 
        
        
        answer.push(Math.min(...queue))
    }
    
    return answer;
}