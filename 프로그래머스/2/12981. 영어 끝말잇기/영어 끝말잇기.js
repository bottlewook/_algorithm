function solution(n, words) {
    const set = new Set(); 
    var answer = [];
    for (let i = 0; i < words.length; i++) {
        if (set.has(words[i])) {
            return [i % n + 1, Math.floor(i / n) + 1]
        } else {
            set.add(words[i])
            if (words[i + 1] != null && words[i].at(-1) !== words[i + 1].at(0)) {
                return [(i + 1) % n + 1 , Math.floor((i + 1) / n) + 1]
            }
        }
    }

    return [0,0]
}