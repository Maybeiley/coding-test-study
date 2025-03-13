function solution(id_list, report, k) {
  var answer = [];
  let reportInfo = {};
  let reportCount = {};
  let mailCount = {};

  //유저 정보 저장하기
  for (let i = 0; i < id_list.length; i++) {
    let user = id_list[i];
    reportInfo[user] = {};
    reportCount[user] = 0;
    mailCount[user] = 0;
  }

  // 신고 처리
  for (let i = 0; i < report.length; i++) {
    let [reporter, reported] = report[i].split(" ");
    if (!reportInfo[reporter][reported]) {
      reportInfo[reporter][reported] = true;
      reportCount[reported]++;
    }
  }
  // 정지된 유저를 신고한 사람에게 메일 발송
  for (let i = 0; i < id_list.length; i++) {
    let reportedUser = id_list[i];

    if (reportCount[reportedUser] >= k) {
      for (let reporter in reportInfo) {
        if (reportInfo[reporter][reportedUser]) {
          mailCount[reporter]++;
        }
      }
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    answer.push(mailCount[id_list[i]]);
  }
  return answer;
}
