// 왼쪽 오른쪽
function solution(str_list) {
  let index = str_list.findIndex((x) => x === "l" || x === "r");
  if (index === -1) return [];
  return str_list[index] === "l"
    ? str_list.slice(0, index)
    : str_list.slice(index + 1);
}

// 다른 사람 풀이
function solution(str_list) {
  const i = str_list.findIndex((str) => /l|r/.test(str));
  if (i === -1) {
    return [];
  }
  return str_list[i] === "l" ? str_list.slice(0, i) : str_list.slice(i + 1);
}
