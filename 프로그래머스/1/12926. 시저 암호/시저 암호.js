function solution(s, n) {
    var answer = '';
    for (let x of s) {
        let code = x.charCodeAt();
        if (code >= 65 && code <= 90) {
            if (code + n > 90) {
                code = code + n - 26
            } else {
                code += n
            }
        } else if (code >= 97 && code <= 122) {
            if (code + n > 122) {
                code = code + n - 26
            } else {
                code += n
            }
        }
        answer += String.fromCharCode(code)
    }
    return answer;
}