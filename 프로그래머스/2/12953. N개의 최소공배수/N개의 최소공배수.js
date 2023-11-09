function 최소공배수(a, b) {
    if (b % a === 0) return b
    let c = b % a
    while (a % c) {
        c = a % c
    }
    
    return a * b / c
}

function solution(arr) {
    arr.sort((a, b) => a - b)
    while (arr.length >= 2) {
        let b = arr.pop();
        let a = arr.pop();
        arr.push(최소공배수(a, b))
    }
    
   return arr[0]
}