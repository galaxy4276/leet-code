/** @url https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/ */
/**
 * @constraint
 * 1. 함수 반환 형태는 void, nums1 에 최종적으로 완성되어야 한다.
 * 2. 배열의 크기는 m + n, nums2 는 n 크기를 가지고 있다.
 */

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  const res = [];
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] > nums2[i]) {
      res.push(nums2[i]);
    } else {
      res.push(nums1[i]);
    }
  }
  console.log(res);
};


console.log(`merge Result: ${merge([1,2,3,0,0,0], 3, [2,5,6], 3)}`);
