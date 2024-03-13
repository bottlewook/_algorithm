function find(target, arr) {
    let count = 0;
    for (let x of arr) {
        if (x >= target) count++
    }
    
    return target <= count 
}

function solution(citations) {
    let answer = 0;
    let start = 0;
    let end = citations.length;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (find(mid, citations)) {
            answer = Math.max(mid, answer)
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return answer;
}