function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }
    
    return a
}


function solution(arr) {
    var answer = 0;
    while (arr.length > 1) {
        let a = arr.pop();
        let b = arr.pop();
        let temp = GCD(a, b);
        arr.push(a * b / temp)
    }
    return arr[0];
}