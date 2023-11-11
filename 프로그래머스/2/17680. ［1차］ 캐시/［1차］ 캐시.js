function solution(cacheSize, cities) {
    var answer = 0;
    const cache = Array.from({length: cacheSize}, () => 0);
    
    const lowerCities = cities.map(city => city.toLowerCase())
    
    lowerCities.forEach(city => {
       let position = -1;
        
       for (let i = 0; i < cacheSize; i++) if (cache[i] === city) position = i;
        
        if (position == -1) {
            for (let i = cacheSize - 1; i > 0; i--) {
                cache[i] = cache[i - 1]
            }
            
            answer += 5
        } else {
            for (let i = position; i > 0; i--) {
                cache[i] = cache[i - 1]
            }
            
            answer += 1
        }
        
        cache[0] = city
    })
        
    return answer;
}