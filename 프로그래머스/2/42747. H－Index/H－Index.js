function hIndex(arr, number) {
    let check = 0;
    
    for (i = 0; i < arr.length; i++) {
        if (number <= arr[i]) check++
    }
    
    return check >= number
}

function solution(citations) {
    let answer = 0;
    let lt = 0;
    let rt = Math.max(...citations);
    
    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        if (hIndex(citations, mid)) {
            answer = Math.max(mid, answer);
            lt = mid + 1
        } else rt = mid - 1
    }
    
    return answer;
}