function solution(arr) {
    var stack = [];
    for (let x of arr) {
        if (stack[stack.length - 1] !== x) {
            stack.push(x)
        }
    }
    return stack
}