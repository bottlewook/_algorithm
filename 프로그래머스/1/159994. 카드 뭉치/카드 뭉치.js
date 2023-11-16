function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    let arr = [...cards1, ...cards2];
    if(!arr.every(item => goal.includes(item))) return 'No'
    
    while (i < cards1.length && j < cards2.length) {
        if (cards1[i] === goal[0]) {
            i++;
        } else if (cards2[j] === goal[0]) {
            j++
        } 
        goal.shift();
    }
    
    while (i < cards1.length) {
        if (cards1[i] === goal[0]) {
            i++;
            goal.shift();
        } else {
            return 'No'
        }
    }
    
    while (j < cards2.length) {
        if (cards2[j] === goal[0]) {
            j++;
            goal.shift();
        } else {
            return 'No'
        }
    }
    
    if (i === cards1.length && j === cards2.length) {
        return 'Yes'
    }
    
    return 'No';
}