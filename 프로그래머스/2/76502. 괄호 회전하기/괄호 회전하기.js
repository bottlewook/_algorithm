function solution(s) {
    let answer = 0;
    const temp = s.split('')
    for (let i = 0; i < temp.length; i++) {
        const stack = [];  
        let flag = 1;
        for (let x of temp) {
            if (x === '[' || x === '(' || x === '{') {
                stack.push(x)
            } else {
                if (stack.at(-1) === '[' && x === ']') stack.pop();
                else if (stack.at(-1) === '(' && x === ')') stack.pop();
                else if (stack.at(-1) === "{" && x === '}') stack.pop()
                else flag = 0;
            }
        }
        if (stack.length === 0 && flag) answer++
        temp.push(temp.shift())
    }
   
    
    return answer
}