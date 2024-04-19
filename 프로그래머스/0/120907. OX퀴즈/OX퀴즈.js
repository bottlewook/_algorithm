function solution(quiz) {
    const answer = [];
    for (let x of quiz) {
      const [a, b] = x.split('=')
      if (eval(a) === Number(b)) answer.push('O')
      else answer.push('X')
    }
    return answer;
}