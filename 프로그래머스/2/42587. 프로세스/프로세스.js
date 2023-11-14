function solution(priorities, location) {
    var answer = 0;
    
    const arr = priorities.map((priority, index) => {
        return {
            priority, index
        }
    })
    
    const queue = [];
    
    while (arr.length) {
        const firstElement = arr.shift();
        const hasHighPriority = arr.some(elem => elem.priority > firstElement.priority)
        
        if (hasHighPriority) {
            arr.push(firstElement)
        } else {
            queue.push(firstElement)
        }
    }
    
    return queue.findIndex(item => item.index === location) + 1
}