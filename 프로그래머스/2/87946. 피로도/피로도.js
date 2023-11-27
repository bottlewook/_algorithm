function solution(k, dungeons) {
    let answer = 0;
    const checkList = Array.from({ length: dungeons.length }, () => 0);
    
    function DFS(level, hp) {
        answer = Math.max(answer, level);
        for (let i = 0; i < checkList.length; i++) {
            if (checkList[i] === 0 && dungeons[i][0] <= hp) {
                checkList[i] = 1;
                DFS(level + 1, hp - dungeons[i][1])
                checkList[i] = 0;
            }
        }
    };
    
    DFS(0, k);
    
    return answer
}