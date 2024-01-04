function solution(x, n) {
    var answer = [x];
    for(let i = 1;i<n;i++){
        answer[i] = x + answer[i - 1];
    }
    return answer;
}