const detectConsecutiveOne = (original: number[], nowIndex: number) => {
  let count = 0;

  for (let i = nowIndex; i < original.length; i++) {
    if (original[i] === 1) {
      ++count;
    } else {
      return count;
    }
  }

  return count;
}

const findMaxConsecutiveOnes = (nums: number[]) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      const consecution = detectConsecutiveOne(nums, i) as number;
      if (consecution > count) {
        count = consecution;
      }
    }
  }

  return count;
};

console.log(`findMaxConsecutiveOnes Result: ${findMaxConsecutiveOnes([1,1,0,1,1,1])}`);
