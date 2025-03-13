/*문제 설명
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

유저 ID	유저가 신고한 ID	설명
"muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
"apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
"frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
"muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
"apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.
각 유저별로 신고당한 횟수는 다음과 같습니다.

유저 ID	신고당한 횟수
"muzi"	1
"frodo"	2
"apeach"	0
"neo"	2
위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

유저 ID	유저가 신고한 ID	정지된 ID
"muzi"	["frodo", "neo"]	["frodo", "neo"]
"frodo"	["neo"]	["neo"]
"apeach"	["muzi", "frodo"]	["frodo"]
"neo"	없음	없음
따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ id_list의 길이 ≤ 1,000
1 ≤ id_list의 원소 길이 ≤ 10
id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
1 ≤ report의 길이 ≤ 200,000
3 ≤ report의 원소 길이 ≤ 21
report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
id는 알파벳 소문자로만 이루어져 있습니다.
이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
자기 자신을 신고하는 경우는 없습니다.
1 ≤ k ≤ 200, k는 자연수입니다.
return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
입출력 예
id_list	report	k	result
["muzi", "frodo", "apeach", "neo"] /["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	/ k=2 /	[2,1,1,0]
["con", "ryan"]	/["ryan con", "ryan con", "ryan con", "ryan con"]	/ k=3 /	[0,0] */


//내풀이
// 1. id_list 의 값은 배열이다
// 2. report의 값은 배열이다. 다만 배열 안에 string 으로 작성 되어 있으며, "이용자id 신고한id"형태로 존재한다.
// 3. 정지 기준이 되는 신고 횟수 k 값에 따라 신고당한 유저의 신고 횟수가 k를 넘어섰을때(이상), id_list에 있는 이용자id로 처리결과 메일을 보낸다.
// 4.report 안에 작성되어있는 "이용자id 신고한id"의 형태를 배열로 다시 묶어 [이용자id,신고한id] 형태로 바꾼다.
// 5.공통 되는 이용자id && 신고한id의 횟수가 2번 이상이면 1번으로 간주한다.
// 6. 신고한 id 의 값이 배열안/배열에 공통된 아이디가 몇번인지 확인후 k의 이상일 경우 결과(result)배열에 횟수를 추가한다.
// 7.id_list의 요소의 갯수? 만큼 result의 요소의 갯수와 위치가 정해진다.


//지피티 풀이
function solution(id_list, report, k) {
    // 1. 중복 신고 제거
    const uniqueReport = [...new Set(report)];//	[ 'ryan con' ] 만 저장됨.
    
    // 2. 신고 받은 횟수를 저장할 객체
    const reportedCount = {};
    // 3. 유저별로 신고한 사람을 저장할 객체
    const reportList = {};
    
    // 4. 초기화
    id_list.forEach(id => {
        reportedCount[id] = 0;
        reportList[id] = [];
    });
    
    // 5. 신고 정보 처리
    uniqueReport.forEach(r => {
        const [reporter, reported] = r.split(' ');
        reportedCount[reported]++;
        reportList[reporter].push(reported);
    });
    
    // 6. 메일 수 계산
    return id_list.map(id => {
        return reportList[id].filter(reported => 
            reportedCount[reported] >= k
        ).length;
    });
}


const uniqueReport = [...new Set(report)];

/* Set을 사용한 이유:
- Set은 중복을 허용하지 않는 자료구조입니다
- "muzi frodo"가 여러 번 있어도 한 번만 저장됩니다
- [...new Set()] 스프레드 연산자로 다시 배열로 변환합니다

예시:
report = ["muzi frodo", "muzi frodo", "apeach frodo"]
new Set(report) → Set {"muzi frodo", "apeach frodo"}
[...new Set(report)] → ["muzi frodo", "apeach frodo"]
*/


const reportedCount = {};  // 신고 받은 횟수 저장
const reportList = {};     // 각 유저가 신고한 목록 저장

/* 객체를 사용한 이유:
- 키-값 쌍으로 데이터를 저장하기 좋습니다
- 검색이 빠릅니다 (배열보다 효율적)
- 유저별 데이터를 쉽게 관리할 수 있습니다

예시:
reportedCount = {
    "frodo": 2,  // frodo가 2번 신고됨
    "neo": 2,    // neo가 2번 신고됨
    "muzi": 1    // muzi가 1번 신고됨
}

reportList = {
    "muzi": ["frodo", "neo"],    // muzi가 신고한 사람들
    "apeach": ["frodo", "muzi"]  // apeach가 신고한 사람들
}
*/



id_list.forEach(id => {
    reportedCount[id] = 0;
    reportList[id] = [];
});

/* forEach를 사용한 이유:
- 모든 id에 대해 초기값을 설정해야 합니다
- 단순 반복 작업이므로 forEach가 적합합니다
- 반환값이 필요없는 순회에 좋습니다

예시:
id_list = ["muzi", "frodo", "apeach", "neo"]
실행 후:
reportedCount = {
    "muzi": 0,
    "frodo": 0,
    "apeach": 0,
    "neo": 0
}
reportList = {
    "muzi": [],
    "frodo": [],
    "apeach": [],
    "neo": []
}
*/

uniqueReport.forEach(r => {
    const [reporter, reported] = r.split(' ');
    reportedCount[reported]++;
    reportList[reporter].push(reported);
});

/* 처리 과정:
- split(' ')으로 "muzi frodo" → ["muzi", "frodo"] 변환
- 신고 받은 사람(reported)의 카운트 증가
- 신고한 사람(reporter)의 신고 목록에 추가

예시:
"muzi frodo" 처리시:
reportedCount["frodo"]++ (신고 횟수 증가)
reportList["muzi"].push("frodo") (신고 목록에 추가)
*/

return id_list.map(id => {
    return reportList[id].filter(reported => 
        reportedCount[reported] >= k
    ).length;
});

/* 계산 과정:
- map으로 각 유저별 처리
- filter로 k번 이상 신고된 사람만 필터링
- length로 해당하는 사람 수 계산

예시:
muzi가 신고한 사람들 중 k번 이상 신고된 사람 수
reportList["muzi"] = ["frodo", "neo"]
둘 다 2번 이상 신고됨 → 2를 반환
*/


//다른사람 풀이

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    //new Map() 은 키와 값의 쌍으로 이루어진 객체를 생성합니다.
    //console.log(counts) 

    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}

//풀이 설명.

let reports = [...new Set(report)].map(a => {return a.split(' ')});

/* 설명:
1. new Set(report): 중복 신고 제거
2. map()으로 각 신고 내역을 배열로 변환
3. split(' ')으로 문자열을 배열로 분리

예시:
report = ["muzi frodo", "apeach frodo"]
↓ Set으로 중복 제거 (이 예시에선 중복 없음)
["muzi frodo", "apeach frodo"]
↓ map과 split으로 2차원 배열 변환
[["muzi", "frodo"], ["apeach", "frodo"]]
*/

let counts = new Map();
for (const bad of reports){
    counts.set(bad[1], counts.get(bad[1])+1 || 1)
    
// 풀어서 쓰면:
// 1. bad[1]: 신고당한 사람 ('frodo')
// 2. counts.get(bad[1]): 그 사람의 현재 신고 횟수
// 3. +1: 현재 횟수에 1을 더함
// 4. || 1: 현재 횟수가 없으면(undefined) 1을 사용
// 5. set으로 새 값을 저장
}

/* 설명:
- new Map(): 키-값 쌍을 저장하는 자료구조 생성
- bad[1]: 신고당한 사람 ex)  bad는 각각 ['muzi', 'frodo'], ['apeach', 'frodo'] 이렇게 저장되어있음. 

- counts.get(bad[1])+1 || 1: 
  * 기존 신고 횟수에 1을 더하거나
  * 첫 신고면 1로 설정

예시:
reports = [["muzi", "frodo"], ["apeach", "frodo"]]
실행 후 counts:
Map {
    "frodo" => 2  // frodo가 2번 신고됨
}
*/

let good = new Map();
for(const report of reports){
    if(counts.get(report[1]) >= k){
        good.set(report[0], good.get(report[0])+1 || 1)
    }
}

/* 설명:
- report[0]: 신고한 사람
- report[1]: 신고당한 사람
- counts.get(report[1]) >= k: k번 이상 신고됐는지 확인
- good: 각 유저가 받을 메일 수 저장

예시 (k=2):
reports = [["muzi", "frodo"], ["apeach", "frodo"]]
frodo는 2번 신고됨 → k(2) 이상
→ muzi와 apeach 각각 메일 1회
Map {
    "muzi" => 1,
    "apeach" => 1
}
*/

let answer = id_list.map(a => good.get(a) || 0);

/* 설명:
- id_list 순서대로 결과 배열 생성
- good.get(a) || 0: 
  * 메일을 받으면 그 횟수
  * 메일이 없으면 0 반환

예시:
id_list = ["muzi", "frodo", "apeach", "neo"]
good = Map { "muzi" => 1, "apeach" => 1 }
↓ map으로 변환
answer = [1, 0, 1, 0]
*/