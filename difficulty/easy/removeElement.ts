/** @url https://leetcode.com/problems/remove-element/ */

const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      while (nums[i] === val) nums.splice(i, 1);
    }
  }

  return nums.length;
};

console.log(`removeElement: ${removeElement([0,1,2,2,3,0,4,2], 2)}`);

function simpleRemoveElement(nums: number[], val: number) {
  let currIndex = nums.indexOf(val);

  while (currIndex > -1) {
    nums.splice(currIndex, 1);
    currIndex = nums.indexOf(val);
  }
  console.log(nums);
}

console.log(`removeElement: ${simpleRemoveElement([0,1,2,2,3,0,4,2], 2)}`);
