function solution(word) {
  const obj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const plus = [781, 156, 31, 6, 1];
  return word.split('').reduce((acc, cur, index) => acc + obj[cur] * plus[index] + 1, 0)
}