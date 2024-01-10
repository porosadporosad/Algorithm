function solution(arr, divisor) {
    var answer = [];
    for(let i = 0;i<arr.length;i++){
        let num = arr[i] % divisor;
        if(num === 0){
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0){
        return [-1];
    }
    return answer.sort((a,b) => a-b);
}