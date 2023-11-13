function solution(phone_book) {
  phone_book.sort();
  const boolean = phone_book.some((book, index, arr) => arr[index + 1]?.indexOf(book) === 0)

  return !boolean
}
