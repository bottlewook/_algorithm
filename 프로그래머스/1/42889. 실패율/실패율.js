function solution(N, stages) {
    var answer = [];
    const stageMap = new Map();
    for (let stage of stages) {
        if (stage > N) continue;
        if (stageMap.has(stage)) stageMap.set(stage, stageMap.get(stage) + 1)
        else stageMap.set(stage, 1);
    };
    
    for (let i = 1; i <= N; i++) {
        if (!stageMap.has(i)) stageMap.set(i, 0)
    }
    
    const stageMapArr = [...stageMap];
    
    stageMapArr.sort((a, b) => a[0] - b[0])
    
    const sortedStageMap = new Map(stageMapArr)
    
    let people = stages.length
    const scoreMap = new Map();
    
    for (let [key, value] of sortedStageMap) {
        scoreMap.set(key, value / people);
        people -= value;
    }
    
    const scoreMapArr = [...scoreMap];
    scoreMapArr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return b[1] - a[1]
    })
    
    answer = scoreMapArr.map(score => score[0])
    
    return answer
}