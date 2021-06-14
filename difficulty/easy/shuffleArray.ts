const shuffle = (nums: number[], n: number) => {
  const res: number[] = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[n + i]);
  }
  return res;
};

console.log(`shuffle Result: ${shuffle([2, 5, 1, 3, 4, 7], 3)}`);
