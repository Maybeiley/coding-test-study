// l로 만들기
function solution(myString) {
  var answer = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] < "l") {
      answer += "l";
    } else {
      answer += myString[i];
    }
  }
  return answer;
}

// 다른 사람 풀이
// myString => myString.replace(/[a-k]/g,'l')
// a부터 k까지 전역 검색을 통해 l로 변환
