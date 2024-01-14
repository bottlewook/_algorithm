const fs = require('fs');
const [word, index] = fs.readFileSync('/dev/stdin').toString().split('\n');
console.log(word[index - 1])