/** @url https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/ */

const toArray = (num: number) => [...String(num)];
const convertInteger = (chars: string[]) => chars.map((s) => Number(s));
const reduceAddition = (nums: number[]) => nums.reduce((acc, cur) => acc + cur);
const reduceMultiplication = (nums: number[]) => nums.reduce((acc, cur) => acc * cur);

const subtractProductAndSum = (n: number) =>
  reduceMultiplication(convertInteger(toArray(n))) - reduceAddition(convertInteger(toArray(n)));

console.log(`subtractProductAndSum Result: ${subtractProductAndSum(234)}`);
