function solution(today, terms, privacies) {
  let termList = {};
  let termsArr = terms.map((term) => term.split(' '));
  let transToday = new Date(today.replace(/\./g, '-'));
  let transPrivacies = privacies.map((privacy) => privacy.split(' '));
  let result = [];

  for (let term of termsArr) {
    termList[term[0]] = Number(term[1]);
  }

  for (let i = 0; i < transPrivacies.length; i++) {
    let [rawDate, type] = transPrivacies[i];
    let [year, month, day] = rawDate.split('.').map(Number);
    month += termList[type];

    year += Math.floor((month - 1) / 12);
    month = ((month - 1) % 12) + 1;

    let expireDate = new Date(year, month - 1, day);

    if (transToday >= expireDate) result.push(i + 1);
  }

  return result;
}
