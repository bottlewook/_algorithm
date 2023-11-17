function solution(land) {
    var answer = 0;
    let dp = Array.from(Array(land.length), () => Array(land[0].length).fill(0))

    for (let i = 0; i < land[0].length; i++) {
        dp[0][i] = land[0][i]
    }
    
    for (let row = 1; row < land.length; row++) {
        for (let col = 0; col < land[0].length; col++) {
            let plusNum = 1;
            let maxValue = 0;
            let temp;
            while (plusNum < 4) {
                temp = (col + plusNum) % 4; // 중복을 제외한 열 구하기
                maxValue = Math.max(maxValue, dp[row - 1][temp])
                plusNum++
            }
            
            dp[row][col] = maxValue + land[row][col];
        }
    }
    console.log(dp)
    return Math.max(...dp[land.length - 1]);
}