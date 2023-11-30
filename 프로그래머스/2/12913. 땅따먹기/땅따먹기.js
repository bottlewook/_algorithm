function solution(land) {
    const dp = Array.from(Array(land.length), () => Array(land[0].length).fill(0));
    dp[0].forEach((item, index) => {
        dp[0][index] = land[0][index]
    })
    
    for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
        for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
            let plusNum = 1;
            let max = 0;
           
            while (plusNum < 4) {
                let nextColIndex = (colIndex + plusNum) % 4;
                max = Math.max(max, dp[rowIndex - 1][nextColIndex]);
                plusNum++
            }
            
            dp[rowIndex][colIndex] = max + land[rowIndex][colIndex]
        }
    }
    
    return Math.max(...dp.at(-1))
}