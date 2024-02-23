function solution(s) {
    var index = s.length % 2 === 0 ? s.length / 2 - 1 : Math.floor(s.length / 2)
    return s.length % 2 === 0 ? s.substring(index, index + 2) : s.substring(index, index + 1)
}