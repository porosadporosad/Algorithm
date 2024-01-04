function solution(n) {
    for(let i = 0;i<=n;i++){
        let x = n % i;
        if(x === 1){
            return i;
        }
    }
}