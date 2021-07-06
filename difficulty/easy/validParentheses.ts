/** @url https://leetcode.com/problems/valid-parentheses/ **/

function isValid(s: string): boolean {
  const list = [...s];
  const stack: string[] = [];

  for (let i = 0; i < list.length; i++) {
    const char =  list[i];
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    }

    if (stack.length === 0) {
      return false;
    }

    if (char === ')' && stack.pop() != '(') {
      return false;
    }

    if (char === ']' && stack.pop() !== '[') {
      return false;
    }

    if (char === '}' && stack.pop() !== '{') {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(`result: ${isValid('()[]{}')}`);
console.log(`result: ${isValid('(}')}`);
