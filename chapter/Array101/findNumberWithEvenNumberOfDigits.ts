/** @url https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/ */
const mockData = [12, 345, 2, 6, 7896];

const findNumbers = (nums: number[]) => nums.filter((num) => [...String(num)].length % 2 === 0).length;

