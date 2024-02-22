function solution(n) {
  const arr = String(n)
  let answer = 0;
  for (let x of arr) {
      answer += Number(x)
  }
  return answer
}