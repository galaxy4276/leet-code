/** @url https://leetcode.com/problems/jewels-and-stones/ */

const numJewelsInStones = (jewels: string, stones: string) => {
  return [...stones].filter((stone) => [...jewels].includes(stone)).length;
};

console.log(`numJewelsInStones Result: ${numJewelsInStones('aA', 'aAAbbbb')}`);
