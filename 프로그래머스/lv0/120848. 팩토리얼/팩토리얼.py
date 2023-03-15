def factorial(num):
    if num == 1:
        return 1
    return num * factorial(num - 1)

def solution(n):
    answer = 0
    i = 1
    while True:
        if n >= factorial(i):
            i += 1
        else:
            return i - 1
    return answer