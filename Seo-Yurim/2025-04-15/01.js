// 문제: 직사각형 넒이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  let 가로 = 0;
  let 세로 = 0;

  for (let i = 0; i < dots.length; i++) {
    if (dots[0][0] !== dots[i][0] && dots[0][1] === dots[i][1]) {
      가로 = Math.abs(dots[0][0] - dots[i][0]);
    }

    if (dots[0][0] === dots[i][0] && dots[0][1] !== dots[i][1]) {
      세로 = Math.abs(dots[0][1] - dots[i][1]);
    }
  }

  return 가로 * 세로;
}
