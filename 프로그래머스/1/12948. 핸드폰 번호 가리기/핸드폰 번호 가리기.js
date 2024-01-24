function solution(phone_number) {
    let phoNum = phone_number.split('')
    for(let i =0;i<phoNum.length - 4;i++){
        phoNum[i] = "*";
    }
    let num =phoNum.join('');
    return num;
}