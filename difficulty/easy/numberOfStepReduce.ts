/** @url https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/ */

const numberOfSteps = (num: number) => {
  let res = 0;

  while (num > 0) {
    if (num % 2 !== 0) {
      num--;
      res++;
    } else {
      num /= 2;
      res++;
    }
  }

  return res;
};

console.log(`numberOfSteps Result: ${numberOfSteps(14)}`);

// Recursive Solution
const numberOfStepRecursion = (num: number): number => {
  if (num === 0) return 0;
  return 1 + ((num % 2 === 0) ? numberOfStepRecursion(num / 2) : numberOfStepRecursion(num - 1));
}

console.log(`numberOfStepRecursion Result: ${numberOfStepRecursion(14)}`);
