function solution(elements) {
    const arr = [...elements]
    const set = new Set(elements);
    for (let i = 1; i < elements.length; i++) {
        const temp = elements.shift();
        elements.push(temp)
        for (let j = 0; j < elements.length; j++) {
            arr[j] = arr[j] + elements[j]
        }
        for (let x of arr) set.add(x)
    }
    return set.size
}