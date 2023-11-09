function shiftArray(arr) {
    let temp = arr[0];
    
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    
    return arr
}

function solution(elements) {
    var answer = new Set(elements);
    let arr = [...elements]
    
    let count = 1;
    
    while (count < elements.length) {
        
        shiftArray(arr)
        
        for (let k = 0; k < elements.length; k++) {
            elements[k] += arr[k]
            answer.add(elements[k])
        }
        
        count++
    }
    return answer.size
}