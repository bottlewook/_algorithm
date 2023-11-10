function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr = []
        for (let k = 0; k < arr2[0].length; k++) {
            let temp = 0
            for (let j = 0; j < arr1[0].length; j++) {
                temp += arr1[i][j] * arr2[j][k]
            }
            
            arr.push(temp)
        }
        
        answer.push(arr)
    }
    
    return answer;
}