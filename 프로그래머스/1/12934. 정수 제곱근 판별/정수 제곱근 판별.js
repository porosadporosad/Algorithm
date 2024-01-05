function solution(n) {
    if(n<0){
        return -1;
    }
    let x = Math.sqrt(n);
    if(Number.isInteger(x) ){
        x = x + 1;
        let num = x * x;
        return num;
    } else {
        return -1;
    }
}
