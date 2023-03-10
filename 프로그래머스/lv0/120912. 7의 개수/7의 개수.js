function solution(array) {
    let reg = /7/g
    let arr = array.join('')
    return arr.match(reg).length
}