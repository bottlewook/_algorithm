function solution(brown, yellow) {
    const rows = [];
    const sum = brown + yellow;
    
    for (let row = sum - 1; row >= 2 && row ** 2 >= sum; row--) {
        if (sum % row === 0) rows.push(row)
    }
    
    for (let i = 0; i < rows.length; i++) {
        let col = sum / rows[i];
        if (col + rows[i] - 2 === brown / 2) return [rows[i], col]
    }
}