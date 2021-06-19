/** @url https://leetcode.com/problems/decompress-run-length-encoded-list/ */


const decompressRLElist = (nums: number[]) => {
  const res: number[] = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    res.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return res;
};

console.log(`decompressRLElist Result: ${decompressRLElist([1, 2, 3, 4])}`);
