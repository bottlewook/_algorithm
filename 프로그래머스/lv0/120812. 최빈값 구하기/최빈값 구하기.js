     function solution(array) {
        let answer = 0;
        let map = new Map();
        let max = Number.MIN_SAFE_INTEGER;
        for (let x of array) {
          if (!map.get(x)) {
            map.set(x, 1);
          } else {
            map.set(x, map.get(x) + 1);
          }
        }
        for (const [key, value] of map) {
          if (value > max) {
            max = value;
            answer = key;
          } else if (value === max) {
            answer = -1;
          }
        }
        return answer;
      }