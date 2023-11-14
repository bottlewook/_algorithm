function solution(msg) {
    let answer = [];
    const dictionary = {};
    
    for (let i = 1; i <= 26; i++) {
        dictionary[String.fromCharCode(64 + i)] = i
    }
    
    let count = 27
    
    let currentWord = '';
    
    for (let lt = 0; lt < msg.length; lt++) {
        let nextWord = currentWord + msg[lt];
        
        if (!dictionary[nextWord]) {
            dictionary[nextWord] = count;
            count++
            answer.push(dictionary[currentWord])
            // currentWord = nextWord[nextWord.length - 1]
            currentWord = msg[lt]
        } else {
            currentWord = nextWord
        }
    
    }
    
    answer.push(dictionary[currentWord])
    
    return answer;
}