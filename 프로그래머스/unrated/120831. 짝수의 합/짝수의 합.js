function solution(n) {
    let ii = 0;
    for(let i=2;i<=n;i+=2){
        ii = ii + i;
    }
    return ii;
}