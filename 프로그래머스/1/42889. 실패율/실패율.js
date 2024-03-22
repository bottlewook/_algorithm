function solution(N, stages) {
    let result = [];
    let length = stages.length;
    
    for (let i = 1; i <= N; i++) {
        const count = stages.filter(stage => stage === i).length;
        const fail = length === 0 ? 0 : count / length;
        result.push([i, fail]);
        length -= count;
    }
    
    // 실패율에 따라 내림차순으로 정렬
    result.sort((a, b) => b[1] - a[1]);
    
    // 스테이지 번호만 추출하여 반환
    return result.map(stage => stage[0]);
}