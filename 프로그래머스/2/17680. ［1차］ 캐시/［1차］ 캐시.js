function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0인 경우 처리

    let answer = 0;
    var cities = cities.map(item => item.toLowerCase());
    const cache = [];
    
    for (let city of cities) {
        const index = cache.indexOf(city);
        if (index > -1) {
            // 캐시 히트: 해당 도시를 캐시에서 제거하고 가장 앞에 추가
            cache.splice(index, 1);
            answer += 1;
        } else {
            // 캐시 미스: 캐시가 꽉 찼다면 가장 오래된 항목 제거
            if (cache.length >= cacheSize) cache.pop();
            answer += 5;
        }
        cache.unshift(city); // 현재 도시를 캐시의 가장 앞에 추가
    }
    
    return answer;
}
