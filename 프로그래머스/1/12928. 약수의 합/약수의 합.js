function solution(n) {
    let tol = 0;
    for(let i = 0;i<=n;i++){
        let num = n % i;
        if(num === 0){
            tol = tol + i;
        }
    }
    return tol;
}