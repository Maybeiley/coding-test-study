//https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript




function solution(brown, yellow) {
    // 전체 카펫의 넓이
    let total = brown + yellow;
    
    // 가능한 가로, 세로 조합 찾기
    for (let width = 3; width <= total; width++) {
        let height = total / width;
        
        // 높이가 정수이고, 가로가 세로보다 크거나 같을 때
        if (Number.isInteger(height) && width >= height) {
            // 테두리를 제외한 내부 영역이 yellow와 같은지 확인
            if ((width-2) * (height-2) === yellow) {
                //규칙 찾기:
                // 가로(width) × 세로(height) = 전체 타일 수(brown + yellow)
                // (가로-2) × (세로-2) = 노란색 타일 수(yellow)
                // 테두리 2줄을 빼고 계산하면 노란색 영역!
                return [width, height];
            }
        }
    }
}
