function solution(n, words) {
    const answer = [0, 0];
    const duplication = [];
    const length = words.length;

    let turn = 1;
    duplication.push(words[0])
    for (let i = 1; i < words.length; i++) {
        if (i % n === 0) turn++
        if (duplication.includes(words[i])) return [(i % n) + 1, turn]
        duplication.push(words[i]);
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) return [(i % n) + 1, turn]
    }

    return answer;
}