function solution(id_list, report, k) {
  const reportObject = {}; // 유저가 신고한 목록
  const reportedObject = {}; // 유저가 받은 신고 목록
  const inactiveId = []; // 정지된 유저 목록

  const uniqueReport = [...new Set(report)]; // Set을 사용하여 중복 신고를 제거

  uniqueReport.forEach((el) => {
    const [user, reportedUser] = el.split(" ");
    if (!reportedObject[reportedUser]) {
      reportedObject[reportedUser] = [user];
    } else if (!reportedObject[reportedUser].includes(user)) {
      reportedObject[reportedUser].push(user);
    }

    if (!reportObject[user]) {
      reportObject[user] = [reportedUser];
    } else if (!reportObject[user].includes(reportedUser)) {
      reportObject[user].push(reportedUser);
    }
  });

  Object.keys(reportedObject).forEach((reportedUser) => {
    if (reportedObject[reportedUser].length >= k) {
      // 이미 inactiveId에 추가된 유저가 중복으로 추가되지 않도록 함
      if (!inactiveId.includes(reportedUser)) {
        inactiveId.push(reportedUser);
      }
    }
  });

  const returnArray = id_list.map((id) => {
    let count = 0;
    reportObject[id]?.forEach((reportedUser) => {
      if (inactiveId.includes(reportedUser)) {
        count++;
      }
    });
    return count;
  });
  return returnArray;
}
