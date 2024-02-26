const memo = Array.from({ length: 999999}, () => 0)
memo[0] = 0;
memo[1] = 1;
memo[2] = 1;

function solution(n) {
    for (let i = 3; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567
    }
    return memo[n]
}