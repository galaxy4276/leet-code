/** @url https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/ */

const sortedSquares = (nums: number[]) => nums.map((nums) =>
  Math.pow(nums, 2)).sort((a, b) => (a > b) ? 1 : -1);

console.log(`sotredSquares Result: ${sortedSquares([-4,-1,0,3,10])}`);
