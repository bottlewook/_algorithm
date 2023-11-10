function solution(want, number, discount) {
    var answer = 0;
    let obj = {};
    
    
    for (let i = 0; i < want.length; i++) {
        obj[want[i]] = number[i]
    }
    
    let lt = 0;
    let rt = 10;
    
    while (rt <= discount.length) {
       let temp = { ...obj } 
       let flag = 1;
       for (let i = lt; i < rt; i++) {
         if (temp[discount[i]]) temp[discount[i]]--
         
       }
        for(let value of Object.values(temp)) {
            if(value > 0) {
                flag = 0;
            }
        }
        if(flag) answer++
        rt++
        lt++
    }
    return answer;
}