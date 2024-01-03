function solution(numbers) {
    let answer = 0;
    let numbersP = 0;
    for(let i = 0;i < numbers.length;i++){
        numbersP = numbers[i] + numbersP;
        answer = numbersP / numbers.length;
    }
    return answer;
}