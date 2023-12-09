function solution(my_string, num1, num2) {
    let temp1 = my_string[num1];
    let temp2 = my_string[num2];
    const arr = my_string.split('');
    arr[num1] = temp2;
    arr[num2] = temp1;
    
    return arr.join('')
}