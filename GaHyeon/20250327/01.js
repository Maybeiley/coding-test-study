// 전국 대회 선발 고사
function solution(rank, attendance) {
  let students = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      students.push([rank[i], i]);
    }
  }
  students.sort((a, b) => a[0] - b[0]);
  let [a, b, c] = [students[0][1], students[1][1], students[2][1]];
  return 10000 * a + 100 * b + c;
}
