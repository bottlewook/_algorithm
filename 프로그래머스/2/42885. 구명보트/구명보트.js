function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let lt = 0;

    for (let rt = people.length - 1; rt >= lt; rt--) {
        if (people[lt] + people[rt] > limit) {
            answer++
        }
        else {
            answer++
            lt++
        }   
    }

    return answer;
}