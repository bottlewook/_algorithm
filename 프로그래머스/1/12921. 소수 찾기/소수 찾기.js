function solution(n) {
    let arr = new Array(n - 1).fill(2).map((ele, idx) => ele += idx);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        
        for (let j = i + arr[i]; j <= n; j += arr[i]) {
            arr[j] = 0;
        }
    }
    
    return arr.filter(ele => ele).length
}