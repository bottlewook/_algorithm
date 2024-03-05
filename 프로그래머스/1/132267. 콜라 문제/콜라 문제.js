function solution(a, b, n) {
    let totalColas = 0;
    
    let emptyBottles = n;
    
    while (emptyBottles >= a) {
        const exchangedColas = Math.floor(emptyBottles / a) * b;
        totalColas += exchangedColas;
        
        emptyBottles = (emptyBottles % a) + exchangedColas;
    }
    
    return totalColas;
}
