function solution(k, dungeons) {
    let answer = 0;
    const checkList = Array.from({ length: dungeons.length }, () => 0);
    
    function DFS(level, hp) {
            for (let i = 0; i < dungeons.length; i++) {
                if (checkList[i] === 0 && hp >= dungeons[i][0]) {
                    checkList[i] = 1;
                    answer = Math.max(answer, level)
                    DFS(level + 1, hp - dungeons[i][1])
                    checkList[i] = 0;
            }
        }
    }
    
    DFS(1, k)
    return answer;
}