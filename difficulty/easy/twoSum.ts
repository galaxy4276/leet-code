import _ from 'lodash';

/**
 * @url https://leetcode.com/problems/two-sum/solution/
 */

const twoSumBruteForce = (nums: number[], target: number) => {
  console.log(`nums: ${nums}\ntarget: ${target}`);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};

console.log(`bruteForceResult: ${twoSumBruteForce([2, 7, 11, 15], 9)}\n\n`);

/**
 * @Deprecated not completion code
 */
const twoSumBruteForceRefactoring = (nums: number[], target: number): number[] =>
  _.forEach(nums, (number, index) => {
    _.forEach(_.range(index + 1, nums.length), (secondIndex) => {
      if (target === nums[secondIndex] + nums[index]) {
        return [secondIndex, index];
      }
    });
  });

console.log(`bruteForceRefactoringResult: ${twoSumBruteForceRefactoring([2, 7, 11, 15], 9)}\n\n`);

const twoSumMap = (nums: number[], target: number): number[] => {
  const map = new Map();
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    console.log('collection number is ', i);
    console.log(map.has(nums[i]));
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i); // target - nums[i] 이 부분이 다음 value 와 합이 되면 target이 된다.
      console.log('map: ', map);
    }
  }

  return [-1, -1];
};

console.log(`twoSumMapResult: ${twoSumMap([2, 7, 11, 15], 9)} \n\n`);
console.log(`twoSumMapResult: ${twoSumMap([3, 2, 4], 6)} \n\n`);
