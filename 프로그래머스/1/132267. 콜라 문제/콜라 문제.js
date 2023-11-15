function solution(a, b, n) {
    let getCola = 0;
    let emptyCola = 0;
    
    while (n >= a) {
        getCola += Math.floor(n / a) * b
        emptyCola = n % a + Math.floor(n / a) * b;
        n = emptyCola
    }
    
    
    return getCola;
}