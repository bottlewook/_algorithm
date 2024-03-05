function solution(name, yearning, photo) {
    let answer = []
    const obj = {};
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]
    }
    for (let x of photo) {
        let temp = 0;
        for (let y of x) {
            if (obj[y] != null) {
                temp += obj[y]
            }
        }
        answer.push(temp)
    }
    return answer;
}