//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 내풀이
function solution(n) {
    var answer = Math.sqrt(n);   
    return answer % 1 === 0 ? 1 : 2;
}

// 다른 사람 풀이
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

//Math.sqrt() 메서드는 숫자의 제곱근을 반환합니다.
//Number.isInteger() 메서드는 주어진 값이 정수인지 확인합니다.


