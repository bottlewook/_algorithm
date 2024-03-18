function solution(s) {
    var answer = [];
    const set = new Set();
    const temp = s.replaceAll('{', '[');
    const string = temp.replaceAll('}', ']');
    const arr = JSON.parse(string)
    arr.sort((a, b) => a.length - b.length);
    for (let x of arr) {
        for (let y of x) {
            set.add(y)
        }
    }
    return [...set]
}