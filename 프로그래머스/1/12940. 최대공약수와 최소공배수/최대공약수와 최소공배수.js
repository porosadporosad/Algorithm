function solution(n, m) {
    var answer = [];
    let num1 = 1;
    for(let i=2;i<=Math.min(n,m);i++){
        if(n % i === 0 && m % i === 0){
            num1 = i;
        }
    }
    
    answer.push(num1);
    
    let num2 = 1;
    while(true){
        if((num2 % n == 0)&&(num2 % m == 0)){
            answer.push(num2);
            break;
        }
        num2++;
    }
    return answer;
}