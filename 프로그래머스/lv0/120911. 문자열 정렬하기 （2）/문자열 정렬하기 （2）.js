    function solution(my_string) {
        let arr = my_string.split('');
        let small = arr.map((item) => item.toLowerCase());
        let sorting = small.sort();
        return sorting.join('');
      }