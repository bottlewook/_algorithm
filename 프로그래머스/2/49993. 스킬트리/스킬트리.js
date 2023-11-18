function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = Array.from(skill);
    
    for (let skill_tree of skill_trees) {
        let flag = 0;
        let temp = [...skillArr]
        for (let word of skill_tree) {
            if (flag) break
            if (temp.includes(word)) {
                if (temp[0] !== word) {
                    flag = 1;
                    break;
                }
                else temp.shift()
            }
        }
        
        if (!flag) answer++
    }
    
    return answer;
}