function solution(price, money, count) {
    let answer = 0;
    for(let i = 1; i <= count; i++){
        answer += price * i;
    }
    let total = money - answer;
    return total >= 0 ? 0 : -total;
}