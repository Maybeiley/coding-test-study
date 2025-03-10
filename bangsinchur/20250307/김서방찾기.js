/*String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

입출력 예
seoul	return
["Jane", "Kim"]	"김서방은 1에 있다"*/ 


function solution(seoul) {
    // seoul 배열에서 "Kim"의 인덱스를 찾습니다
    const kimIndex = seoul.indexOf("Kim");
    
    // 결과 문자열을 반환합니다
    return `김서방은 ${kimIndex}에 있다`;
}

//indexOf() 는 배열이나 문자열에서 특정 요소의 첫번째 위치(index)를 반환하는 함수.
//찾지 못하면 -1을 반환.

// 예시
const fruits = ["apple", "banana", "cherry", "date"];
const position = fruits.indexOf("cherry");
const notFound = fruits.indexOf("grape");

console.log(position); // 2
console.log(notFound); // -1

