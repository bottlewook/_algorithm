function shiftArray(arr) {
    let temp = arr[0];
    
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    
    arr[arr.length - 1] = temp;
    
    return arr
}

function solution(elements) {
    const answer = new Set(elements);
    const array = [...elements];
    
    let count = 1
    
    while (count < elements.length) {
        shiftArray(array);
        
        for (let i = 0; i < elements.length; i++) {
            elements[i] += array[i]
            answer.add(elements[i])
        }
        
        count++
    }
    
    return answer.size
}