let fs = require('fs');
let [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = Array(M).fill('');
let answer = '';
dfs(0);
console.log(answer);

function dfs(lev) {
  if (lev === M) {
    answer += `${arr.join(' ')}\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    arr[lev] = i;
    dfs(lev + 1);
  }
}