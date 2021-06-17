/** @url https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/ */

const smallerNumbersThanCurrent = (nums: number[]) =>  nums.map((num, index) =>
  nums.reduce((acc, _, reduceIndex) => {
    if (nums[reduceIndex] < nums[index]) {
      return acc += 1;
    }
    return acc;
  }, 0));

console.log(`smallerNumbersThanCurrent Result: ${smallerNumbersThanCurrent([8, 1, 2, 2, 3])}`);
