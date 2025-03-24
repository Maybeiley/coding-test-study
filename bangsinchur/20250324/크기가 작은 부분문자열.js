//https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
    let count = 0;  // 조건을 만족하는 개수
    let len = p.length;  // 비교할 부분문자열의 길이
    
    // t에서 p의 길이만큼의 부분문자열을 모두 확인
    for(let i = 0; i <= t.length - len; i++) {
        // 부분문자열 추출
        let part = t.slice(i, i + len);
        
        // 부분문자열이 p보다 작거나 같으면 count 증가
        if(part <= p) {
            count++;
        }
    }
    
    return count;
}

