function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    let answer = 0;
    const cache = Array.from({ length: cacheSize }, () => 0);
    cities = cities.map(city => city.toLowerCase());
    
    cities.forEach((city) => {
        let index = cache.indexOf(city)
        
        if (index === -1) {
            for (let i = cacheSize - 1; i > 0; i--) {
                cache[i] = cache[i - 1]
            }
            answer += 5;
        } else {
            for (let i = index; i > 0; i--) {
                cache[i] = cache[i - 1]
            }
            answer++
        }
        cache[0] = city
    })
    
    return answer
}
