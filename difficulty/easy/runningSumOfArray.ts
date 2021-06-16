const runningSum = (nums: number[]): number[] => {
  const value = nums.map((num, index) => {
    if (index === 0) return num;
    const copied = nums.slice(0, index + 1);
    return copied.reduce((acc, cur) => acc + cur);
  });
  return value;
};

console.log(`runningSum Result: ${runningSum([1, 2, 3, 4])}`);

const runningSumSimpleSolution = (nums: number[]): number[] => {
  let sum = 0;
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res.push(sum);
  }

  return res;
}

console.log(`runningSum Result: ${runningSumSimpleSolution([1, 2, 3, 4, 5, 6])}`);
