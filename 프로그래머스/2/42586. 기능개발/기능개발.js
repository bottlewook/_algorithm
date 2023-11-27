function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    const n = progresses.length
    
    for (let i = 0; i < n; i++) {
        days.push(Math.ceil((100- progresses[i]) / speeds[i]))
    }
    
    let max = days.at(0);
    let count = 0

    for (let i = 0; i < n; i++) {
        if (days[i] > max) {
            max = days[i];
            answer.push(count);
            count = 1;
        } else {
            count++
        }
    }
    
    answer.push(count)
   
    return answer;
}