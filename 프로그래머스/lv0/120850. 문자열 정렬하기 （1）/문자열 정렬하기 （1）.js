 function solution(my_string) {
        let reg = /[0-9]/g;
        let arr = my_string.match(reg);
        arr.sort((a, b) => parseInt(a) - parseInt(b));
        for (let i = 0; i < arr.length; i++) {
          arr[i] = parseInt(arr[i]);
        }
        return arr;
      }