function solution(arr) {
    let arrP = 0;
    for(let i = 0;i<arr.length;i++){
        arrP = arr[i] + arrP;
    }
    arrP = arrP / arr.length;
    return arrP;
}