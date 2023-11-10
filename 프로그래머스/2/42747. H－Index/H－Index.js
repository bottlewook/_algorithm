function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => a - b);
    
    let lt = 0;
    let rt = Math.max(...citations)
    
    while (lt <= rt) {
        // 인용 횟수의 최대값
        let mid = Math.floor((lt + rt) / 2);
        let count = 0;
        for (let i = 0; i < citations.length; i++) {
            if (mid < citations[i]) count++
        }
        if (count === mid) return mid
        if (count < mid) {
            rt = mid - 1
        } else {
            lt = mid + 1
        }
    }
    
    return answer;
}