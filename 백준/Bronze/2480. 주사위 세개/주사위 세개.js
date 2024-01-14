const fs = require('fs')
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(' ').map(item => + item)

if (a === b && b === c && a === c) console.log(10000 + a * 1000)
else if (a === b) console.log(1000 + a * 100)
else if (a === c) console.log(1000 + a * 100)
else if (c === b) console.log(1000 + b * 100)
else console.log(Math.max(a, b, c) * 100)
