function solution(my_string) {
  return my_string
    .replace(/\D/g, ' ')
    .split(' ')
    .filter((val) => val !== '')
    .reduce((total, current) => total + Number(current), 0);
}
