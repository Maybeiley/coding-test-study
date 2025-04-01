/*
오늘의 추천 문제: 왼쪽 오른쪽
문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. 
str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
"l"이나 "r"이 없다면 빈 리스트를 return합니다.
*/

// 처음 풀이
function solution1(str_list) {
  let wordL = str_list.indexOf('l');
  let wordR = str_list.indexOf('r');

  if (wordL === -1 && wordR === -1) return [];

  if ((wordL < wordR && wordL !== -1) || wordR === -1) {
    return str_list.slice(0, wordL);
  } else if ((wordL > wordR && wordR !== -1) || wordL === -1) {
    return str_list.slice(wordR + 1);
  }
}

// 수정한 풀이
function solution2(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') return str_list.slice(0, i);
    if (str_list[i] === 'r') return str_list.slice(i + 1);
  }

  return [];
}
