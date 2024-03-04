function two(number, length) {
    let temp = Array.from({ length }, () => 0);
    
    function DFS(n, level) {
            let a = n % 2 // 나머지
            let b = Math.floor(n / 2); // 몫
            temp[level] = a
            if (level === length - 1) return
            DFS(b, level + 1)
    }
    
    DFS(number, 0)

    return temp.reverse().join('')
}

function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        const x = two(arr1[i], n)
        const y = two(arr2[i], n)
        let temp = ''
        for (let i = 0; i < n; i++) {
            if (x[i] == '1' || y[i] == '1') temp += '#'
            else temp += ' '
        }
        answer.push(temp)
    }
    return answer;
}