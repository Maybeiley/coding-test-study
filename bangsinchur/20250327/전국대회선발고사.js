//https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript

function solution(rank, attendance) {
  // 학생번호와 등수를 함께 저장
  const rankWithIndex = rank.map((r, i) => [r, i]);
  // 등수로 정렬
  const sortedRank = rankWithIndex.sort((a, b) => a[0] - b[0]);
  // 참가 가능한 학생만 필터링
  const selectedStudents = sortedRank.filter(([_, i]) => attendance[i]);
  // 학생 번호로 계산
  return (
    selectedStudents[0][1] * 10000 +
    selectedStudents[1][1] * 100 +
    selectedStudents[2][1]
  );
}

// 다른사람 풀이
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
