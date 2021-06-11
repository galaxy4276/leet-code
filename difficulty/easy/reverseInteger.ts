/** @url https://leetcode.com/problems/reverse-integer/ */
import overAndUnderFlow from '../../helper/overAndUnderFlow';

const reverseMyOwn = (x: number) => {
  const isNumberWrong = overAndUnderFlow(x);
  if (isNumberWrong === -1) {
    return 0;
  }
};

console.log(`reverMyOwn Result: ${reverseMyOwn(123)}`);

const reversedSolution = (x: number) => {
  const absReversed = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (absReversed > 2**31) return 0;
  return absReversed * Math.sign(x);
};

console.log(`reversedSolution: ${reversedSolution(-123)}`);

// Remember Method Chaning Of JavaScript
