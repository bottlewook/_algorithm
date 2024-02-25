function solution(s) {
    let count = 0;
    let deleteZero = 0;
    
    while (s !== '1') {
        count++
        let temp = ''
        for (let x of s) {
            if (x === '0') deleteZero++
            else temp += '1'
        }
        s = (temp.length).toString(2)
    }
    
    return [count, deleteZero]
}