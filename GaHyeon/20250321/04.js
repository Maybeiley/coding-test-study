function solution(myString) {
  var answer = "";
  for (let i = 0; i < myString.length; i++) {
    let ch = myString[i];

    if (ch === "a") {
      answer += "A";
    } else if (ch === "A") {
      answer += "A";
    } else {
      answer += ch.toLowerCase();
    }
  }
  return answer;
}
