const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("")
let temp = [];
let flag = false;
let answer = [];
for(let i = 0; i<input.length; i++){
  if(input[i]=='<'){
    if(temp.length>0){
      answer = answer.concat(temp)
      temp = [];
    }
    answer.push('<')
    flag = true;
  }else if(input[i]=='>'){
    answer.push('>')
    flag = false;
  }else{
    if(flag){ // 괄호 안에 있는 거는 그대로
      answer.push(input[i])
    }else{ // 다른거는 거꾸로
      if(input[i]==' '){
        temp.push(' ')
        answer = answer.concat(temp)
        temp = [];
      }else{
        temp.unshift(input[i])
      }
    }
  }
}

if(!flag){
  answer = answer.concat(temp)
}


console.log(answer.join(''))