def solution(num, k):
    str_num = str(num)
    i = 1
    
    for num in str_num:
        if int(num) == k:
            return i
        else:
            i += 1
            
    return -1