function solution(id_list, report, k) {
  const uniqueReports = [...new Set(report)];

  const reportCount = {};
  const userReports = {};
  const mailCount = Array(id_list.length).fill(0);

  id_list.forEach((user) => {
    reportCount[user] = 0;
    userReports[user] = new Set();
  });

  uniqueReports.forEach((rep) => {
    const [reporter, reported] = rep.split(" ");
    userReports[reporter].add(reported);
    reportCount[reported] += 1;
  });

  const bannedUsers = new Set(id_list.filter((user) => reportCount[user] >= k));

  id_list.forEach((user, index) => {
    userReports[user].forEach((reported) => {
      if (bannedUsers.has(reported)) mailCount[index] += 1;
    });
  });

  return mailCount;
}
