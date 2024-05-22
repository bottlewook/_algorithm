function solution(num_list, n) {
    let temp = num_list.splice(n)
    return temp.concat(num_list)
}