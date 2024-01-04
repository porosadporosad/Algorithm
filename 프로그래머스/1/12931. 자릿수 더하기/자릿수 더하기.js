function solution(n)
{
    const nArr = n.toString().split('').map(Number);
    let tol = 0;
    for(let i = 0;i < nArr.length;i++){
        tol = nArr[i] + tol;
    }
    return tol;
}