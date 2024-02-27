function solution(s) {
    const stack = [];
    for (let x of s) {
        if (stack.at(-1) !== x) stack.push(x)
        else {
            stack.pop()
        }
    }
    return stack.length ? 0 : 1
}