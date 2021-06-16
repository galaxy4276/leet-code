/** @url https://leetcode.com/problems/richest-customer-wealth/ */

const combine = (nums: number[]) => nums.reduce((acc, cur) => acc + cur);

const maximumWealth = (accounts: number[][]): number => Math.max(...accounts.map(combine));

console.log(`maximumWealth Result: ${maximumWealth([[2,8,7],[7,1,3],[1,9,5]])}`);
