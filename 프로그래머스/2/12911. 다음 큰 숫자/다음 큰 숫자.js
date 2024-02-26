function count(num) {
    const temp = num.toString(2);
    let count = 0;
    for (let x of temp) {
        if (x === '1') count++
    }
    return count
}

function solution(n) {
    let temp = count(n)
    while (true) {
        n++
        if (temp === count(n)) return n
    }
}