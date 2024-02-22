function solution(s){
    let countP = 0;
    let countY = 0;
    for (let x of s) {
        let lowerString = x.toLowerCase()
        if (lowerString === 'p') countP++
        else if (lowerString === 'y') countY++
    }

    return countP === countY ? true : false
}