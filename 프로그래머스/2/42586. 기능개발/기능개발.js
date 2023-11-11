function solution(progresses, speeds) {
    let days = [];
    let answer = [];
    
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let count = 1;
    let max = days[0]
    
    for (let i = 1; i < days.length; i++) {
        if (max >= days[i]) {
            count++
        }  else {
            answer.push(count);
            count = 1;
            max = days[i]
        }
    }
    
    answer.push(count)
    
    return answer;
}