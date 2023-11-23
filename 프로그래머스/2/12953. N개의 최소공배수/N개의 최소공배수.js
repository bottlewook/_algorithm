function 최소공배수(a, b) {
    let c = b % a
    if (c === 0) return b;
    while (a % c) {
        c = a % c
    }
    
    return a * b / c
}


function solution(arr) {
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        let first = arr.pop();
        let second = arr.pop();
        arr.push(최소공배수(second, first))
    }
    
    return arr[0]
}