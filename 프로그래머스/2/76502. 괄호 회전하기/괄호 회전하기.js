function check(arr) {
  let stack = [];

  for (let x of arr) {
    if (x === "[" || x === "{" || x === "(") {
      stack.push(x);
    } else {
        if (x === ']' && stack[stack.length - 1] === '[') stack.pop();
        else if (x === ')' && stack[stack.length - 1] === '(') stack.pop();
        else if (x === '}' && stack[stack.length - 1] === '{') stack.pop();
        else return false
    }
  }

  return !stack.length;
}

function solution(s) {
  let answer = 0;

  for (let i = 1; i <= s.length; i++) {
    if (check(s)) answer++;
    let temp = s;
    let val = temp[0];
    let str = temp.substring(1);
    s = str + val;
  }

  return answer;
}
