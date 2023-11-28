function solution(k, dungeons) {
    let answer = -1;
    const checkList = Array.from({ length: dungeons.length }, () => 0);
    
    function DFS(level, hp) {
        for (let i = 0; i < checkList.length; i++) {
            if (checkList[i] === 0 && hp >= dungeons[i][0]) {
                checkList[i] = 1;
                DFS(level + 1, hp - dungeons[i][1])
                checkList[i] = 0;
            }
        }
        
      answer = Math.max(answer, level)
    }
    
    DFS(0, k)
    return answer;
}