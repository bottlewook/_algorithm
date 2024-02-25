function solution(s){
    let answer = true;
    const stack = [];

    for (let x of s) {
        if (x === '(') stack.push(x)
        else {
            if (stack.at(-1) === '(') stack.pop();
            else return false
        }
    }

    return stack.length === 0;
}