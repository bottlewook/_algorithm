function solution(skill, skill_trees) {
    let answer = 0;
    const queue = skill.split('');
    
    for (let skill of skill_trees) {
        const temp = [...queue];
        let flag = 1;
        for (let word of skill) {
            if (temp.includes(word) && flag) {
                if (temp.shift() !== word) flag = 0;
            }
        }
        if (flag) answer++
    }
    
    return answer;
}