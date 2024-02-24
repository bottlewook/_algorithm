process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = ''
    for (let j = 1; j <= b; j++) {
      let temp = ''
      for (let i = 1; i <= a; i++) {
        temp += '*'
      }
      answer += temp
      answer += '\n'
    }
        console.log(answer)
});