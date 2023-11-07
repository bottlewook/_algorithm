function solution(n, words) {
  let store = [words[0]];
  let temp = words[0][words[0].length - 1];

  for (let i = 1; i < words.length; i++) {
    // 중복된 단어가 있을 경우
    if (store.includes(words[i]))
      return [(i + 1) % n === 0 ? n : (i + 1) % n, Math.floor(i / n) + 1];
    // 앞뒤 단어가 다른 경우
    if (words[i][0] !== temp)
      return [(i + 1) % n === 0 ? n : (i + 1) % n, Math.floor(i / n) + 1];

    temp = words[i][words[i].length - 1];

    store.push(words[i]);
  }

  return [0, 0];
}