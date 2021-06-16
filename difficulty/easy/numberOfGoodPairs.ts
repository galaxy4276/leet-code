/** @url https://leetcode.com/problems/number-of-good-pairs/ */

/**
 * @constraint
 * 1.(i, j) 에 대해서 다음과 같은 조건이 만족한다면 참 쌍이다.
 *   1. nums[i] === nums[j]
 *   2. i < j
 */

const numIdenticalPairs = (nums: number[]): number => {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        res++;
      }
    }
  }

  return res;
};

console.log(`numIdenticalPairs: ${numIdenticalPairs([1,2,3,1,1,3])}`);

const numIdenticalPairSolveMap = (nums: number[]) => {
  const map = new Map();
  let res = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) + 1) || 1);
    console.log(map);
  }
  const array = Array.from(map.values()).filter((val) => val > 1);
  console.log({ array });
  for (const num of array) res += (num*(num - 1)) / 2;

  return res;
};

console.log(`numIdenticalPairs: ${numIdenticalPairSolveMap([1,2,3,1,1,3])}`);
