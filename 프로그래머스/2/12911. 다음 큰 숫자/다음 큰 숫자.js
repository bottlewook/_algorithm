function solution(n) {
    var answer = 0;
    let binary = n.toString(2);
    let count = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') count++
    }
    
    while (true) {
        let value = n + 1
        let str = value.toString(2)
        let count1 = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '1') count1++
        }
        if(count === count1) return n + 1
        n++
    };
    
    return answer;
}