 function solution(my_string) {
        let sum = 0;
        let reg = /[0-9]/g;
        var num = my_string.match(reg);
        for (let x of num) {
          sum += +x;
        }
        return sum;
      }