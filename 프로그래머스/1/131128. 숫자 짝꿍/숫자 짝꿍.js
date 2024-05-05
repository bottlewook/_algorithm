function solution(X, Y) {
    let answer = ''
    let arrX = Array.from({ length: 10 }, () => (0));
    let arrY = Array.from({ length: 10 }, () => (0));
    let arr = Array.from({ length: 10 }, () => (0));
    for (let x of X) arrX[Number(x)]++
    for (let y of Y) arrY[Number(y)]++
    for (let i = 0; i < 10; i++) arr[i] = (Math.min(Number(arrX[i]), Number(arrY[i])))
    for (let i = 9; i >= 0; i--) {
        for (let j = 1; j <= arr[i]; j++) {
            answer += String(i)
        }
    }
    const set = new Set(answer);
    if (set.size === 1 && set.has('0')) return '0'
    return answer ? answer : '-1'
}
