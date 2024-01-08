function solution(x) {
    let num = x.toString().split('').map(Number);
    let number = 0;
    for(let i =0;i<num.length;i++){
        number += num[i];
    }
    return x % number === 0;
}