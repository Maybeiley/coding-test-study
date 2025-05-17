function solution(new_id) {
  // 소문자로 변환
  let newID = new_id.toLowerCase();

  // 사용 불가능 문자 제외
  newID = newID.replace(/[^a-z0-9-_.]/g, '');

  // 연속된 마침표 하나로 치환
  newID = newID.replace(/\.{2,}/g, '.');

  // 마침표 위치가 처음 또는 끝이면 제거
  newID = newID.replace(/^\.|\.$/g, '');

  // 빈 문자열이면 a 저장
  if (newID === '') newID = 'a';

  // 15자 초과 시 그 외 문자 제거
  newID = newID.slice(0, 15).replace(/\.$/, '');

  // 2자 이하면 길이가 3일때까지 마지막 문자 반복
  while (newID.length < 3) {
    newID += newID[newID.length - 1];
  }

  return newID;
}
