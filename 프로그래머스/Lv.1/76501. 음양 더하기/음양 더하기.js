function solution(absolutes, signs) {
    let num = 0;
    for(let i=0;i<absolutes.length;i++){
        if(signs[i]){
            num += absolutes[i];
        } else {
            num -= absolutes[i];
        }
    }
    return num;
}