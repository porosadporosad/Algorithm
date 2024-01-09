function solution(a, b) {
    let start = Math.min(a,b);
    let end = Math.max(a,b);
    let num = 0;
    for(let i = start; i<=end;i++){
        num = i + num;
    }
    return num;
}