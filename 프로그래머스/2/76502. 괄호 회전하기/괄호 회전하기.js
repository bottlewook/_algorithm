function shiftArr(arr) {
    let temp = arr.at(0);
    
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    
    arr[arr.length - 1] = temp;
    
    return arr
}

function solution(s) {
    let answer = 0;
    let stack = [];
    const length = s.length;
    const arr = s.split('');
    
    let count = 0;
    
    while (count < length) {
        
        for (let i = 0; i < length; i++) {
            if (stack.at(-1) === '[' && arr[i] === ']') stack.pop();
            else if (stack.at(-1) === '(' && arr[i] === ')') stack.pop();
            else if (stack.at(-1) === '{' && arr[i] === '}') stack.pop();
            else stack.push(arr[i])
        }
        if (stack.length === 0) answer++ 
        
        stack = [];
        shiftArr(arr)
        count++
    }
    
    return answer
}