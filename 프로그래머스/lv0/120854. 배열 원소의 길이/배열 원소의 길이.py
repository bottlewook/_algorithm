def solution(strlist):
    arr = []
    for str in strlist:
        sum = 0
        for num in str:
            sum += 1
        arr.append(sum)
    return arr