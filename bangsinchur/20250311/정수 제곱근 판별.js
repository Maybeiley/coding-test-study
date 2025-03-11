// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1

// 내풀이
function solution(n) {
    
    let double =n ** (1/2)
 
    if( Number.isInteger(double) === true){
        return (double+1) ** 2
    } else {
        return -1
    }

}

// 다른 사람 풀이
function solution(n) {
    const sqrt = Math.sqrt(n);
    return sqrt % 1 === 0 ? (sqrt + 1) ** 2 : -1;
}

// Math.sqrt() 메서드는 숫자의 제곱근을 반환합니다.
// 1. 기본 사용
Math.sqrt(16);    // 4
Math.sqrt(100);   // 10
Math.sqrt(2);     // 1.4142135623730951 (무리수)

// 2. 음수를 입력하면?
Math.sqrt(-16);   // NaN (실수 범위에서 음수의 제곱근은 존재하지 않음)

// 3. 0이나 1의 경우
Math.sqrt(0);     // 0
Math.sqrt(1);     // 1

// 4. 문자열이 자동으로 숫자로 변환됨
Math.sqrt("16");  // 4
Math.sqrt("abc"); // NaN

//항상 양의 제곱근만 반환합니다
// 음수의 제곱근은 NaN을 반환합니다
// 정확한 제곱근이 아닌 경우 근사값을 반환합니다
// 매개변수가 없거나 숫자로 변환할 수 없는 경우 NaN을 반환합니다