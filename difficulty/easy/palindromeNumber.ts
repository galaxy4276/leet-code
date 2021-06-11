/** @url https://leetcode.com/problems/palindrome-number/ */
const isPalinDrome = (x: number): boolean => {
  if ((x >= (2**31 - 1)) || (x <= (-2)**31)) return false;

  const reversed = String(x).split('').reverse().join('');
  return x === Number(reversed);
};

console.log(`isPalinDrome result: ${isPalinDrome(-101)}`);
console.log(`isPalinDrome result: ${isPalinDrome(101)}`);
console.log(`isPalinDrome result: ${isPalinDrome(1000021)}`);
