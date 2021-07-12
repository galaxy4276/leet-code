/** @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/ **/

// 뒤에서부터 깎아나가는 것도 방법이다.
/**
 * @solution
 * 기존에는 앞에서부터 처리하려고 했을 때, 중복 원소인 경우 splice 처리로 인해 인덱스를 처리해야하는 골치아픈 문제가 발생하고 있었다.
 * 뒤에서부터 처리했다면 중복원소를 더 편리하게 처리할 수 있었다.
 * @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/848554/Typescript-O(n)
 * @addition Set ( 중복 제거 ) 자료형을 사용했어도 됬었다.
 */
function removeDuplicates(nums: number[]): number {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

console.log(removeDuplicates(
  [1,1,1,1]
));
