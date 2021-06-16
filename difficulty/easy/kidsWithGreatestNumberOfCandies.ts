/** @url https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ */

const kidsWithCandies = (candies: number[], extraCandies: number) => {
  const havingMaxCandiesKidNumber = Math.max(...candies);
  return candies.map((kidCandies) => (kidCandies + extraCandies) >= havingMaxCandiesKidNumber);
};

console.log(`kidsWithCandies Result: ${kidsWithCandies([2,3,5,1,3], 3)}`);
