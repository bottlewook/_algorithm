 function solution(my_string) {
        let reg = /[0-9]/g;
        let num = my_string.match(reg);
        let sum = num.reduce((a, b) => parseInt(a)+parseInt(b), 0)
        
        return sum;
      }