/** @url https://leetcode.com/problems/search-insert-position/ **/

/**
 * @solution 이진 탐색법을 이용해서 푼다.
 */

const searchInsert = (nums: number[], target: number): number =>
  binarySearch(nums, target, 0, nums.length - 1);

const binarySearch = (nums: number[], target: number, start: number, end: number): number => {
  console.log({ start, end });
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midNum = nums[mid];
    if (target === midNum) {
      return mid;
    } else if (target < midNum) {
      return binarySearch(nums, target, 0, mid - 1);
    } else {
      return binarySearch(nums, target, mid + 1, end);
    }
  }

  return end + 1;
};

console.log(searchInsert([1,3,5,6], 7123));