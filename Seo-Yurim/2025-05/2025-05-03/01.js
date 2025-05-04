function solution(nums) {
  let selectCount = nums.length / 2;
  let uniqueNums = new Set(nums);
  return selectCount <= uniqueNums.size ? selectCount : uniqueNums.size;
}
