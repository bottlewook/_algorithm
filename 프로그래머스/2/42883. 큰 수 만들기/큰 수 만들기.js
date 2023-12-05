function solution(number, k) {
    const stack = [];
    let answer = '';
    
    for (let i = 0; i < number.length; i++) {
        const element = number.at(i);
        
        while (k > 0 && stack.at(-1) < element) {
            stack.pop();
            k--
        }
        
        stack.push(element)
    }
    stack.splice(stack.length - k, k)
    answer = stack.join('')
    return answer;
}