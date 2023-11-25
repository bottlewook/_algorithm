function solution(cacheSize, cities) {
    let answer = 0;
    const lowerCities = cities.map(city => city.toLowerCase());
    const cache = Array.from({ length: cacheSize }, () => 0);
    
    lowerCities.forEach(city => {
        let index = -1;
        
        for (let i = 0; i < cacheSize; i++) {
            if (cache[i] === city) index = i    
        };
        
        if (index !== -1) {
            for (let i = index; i > 0; i--) {
                cache[i] = cache[i - 1];
            };
            
            answer++
        } else if (index === -1) {
            for (let i = cache.length - 1; i > 0; i--) {
                cache[i] = cache[i - 1];
            }
            
            answer += 5
        }
        
        cache[0] = city
    })
    
    return answer;
}