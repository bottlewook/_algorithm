def solution(array):
    answer = []
    max = array[0]
    idx = 0
    temp = 0
    
    for num in array:
        temp += 1
        print(temp)
        if num > max:
            max = num
            idx = temp - 1
            print(idx)
        
    answer.append(max)
    answer.append(idx)
    return answer