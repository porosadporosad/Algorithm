function solution(n) {
    let num = n.toString().split('').map(Number);
    num.sort((a,b)=> b - a);
    return Number(num.join(''));
}