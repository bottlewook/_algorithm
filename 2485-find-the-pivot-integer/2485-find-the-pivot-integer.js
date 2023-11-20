/**
 * @param {number} n
 * @return {number}
 */

const check = (mid, n) => {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i <= mid; i++) {
        sum1 += i
    }

    for (let i = mid; i <= n; i++) {
        sum2 += i
    }

    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1
};

const pivotInteger = function(n) {
    let lt = 0;
    let rt = n;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        let value = check(mid, n);
        if (value === 0) return mid
        if (value === 1) rt = mid -1
        if (value === -1) lt = mid + 1 
    }

    return -1
};