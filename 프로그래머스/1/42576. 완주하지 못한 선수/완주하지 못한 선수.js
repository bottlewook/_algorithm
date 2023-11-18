function solution(participant, completion) {
    let participantMap = new Map();
    
    for (let x of participant) {
        if (participantMap.has(x)) participantMap.set(x, participantMap.get(x) + 1)
        else participantMap.set(x, 1)
    }
    
    for (let x of completion) {
        if (participantMap.has(x)) participantMap.set(x, participantMap.get(x) - 1)
    }
    
    for (let [key, value] of participantMap) {
        if (value === 1) return key
    }
    

}