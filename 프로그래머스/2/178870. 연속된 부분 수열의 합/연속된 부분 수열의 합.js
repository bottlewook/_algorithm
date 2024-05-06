function solution(sequence, k) {
    let start = 0, end = 0;
    let sum = sequence[0];
    let result = [0, sequence.length - 1]; // 초기값 설정, 최대 길이로 설정해둠
    let minLength = Infinity; // 찾고자 하는 부분 수열의 최소 길이

    while (end < sequence.length) {
        if (sum < k) {
            // 합이 k보다 작으면 end 포인터를 오른쪽으로 이동
            end++;
            if (end < sequence.length) {
                sum += sequence[end];
            }
        } else if (sum >= k) {
            // 합이 k보다 크거나 같으면 최소 길이 갱신 및 결과 업데이트
            if (sum === k && (end - start) < minLength) {
                minLength = end - start;
                result = [start, end];
            }
            // start 포인터를 오른쪽으로 이동
            sum -= sequence[start];
            start++;
        }
    }

    return result;
}
