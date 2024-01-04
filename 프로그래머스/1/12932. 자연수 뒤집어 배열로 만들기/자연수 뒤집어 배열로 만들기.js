function solution(n) {
    let num = n.toString().split('').map(Number);
    let arr = [];
    for(let i = num.length - 1;i>=0;i--){
        arr.push(num[i]);
    }
    return arr;
}