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


