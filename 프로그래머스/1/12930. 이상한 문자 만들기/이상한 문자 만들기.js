function solution(s) {
    const arr = s.split(' ')
    const temp = [];
    for (let x of arr) {
        let str = ''
        for (let i = 0; i < x.length; i++) {
            if (i % 2 === 1) str += x[i].toLowerCase()
            else str += x[i].toUpperCase();
        }
        temp.push(str)
    }
    return temp.join(' ')
}