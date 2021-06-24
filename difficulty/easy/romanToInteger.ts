/** @url https://leetcode.com/problems/roman-to-integer/ */

enum Hash {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

function getNumeric(char: string, nextChar: string): [number, boolean] | [number] {
  switch (char) {
    case 'I': {
      if (nextChar === 'V') return [4, true];
      if (nextChar === 'X') return [9, true];
      return [1];
    }
    case 'X': {
      if (nextChar === 'L') return [40, true];
      if (nextChar === 'C') return [90, true];
      return [10];
    }
    case 'C': {
      if (nextChar === 'D') return [400, true];
      if (nextChar === 'M') return [900, true];
      return [100];
    }
    default: return [Hash[char as never] as unknown as number];
  }
}

function romanToInt(s: string) {
  let i = 0;
  let total = 0;

  while (s.length > i) {
    const char = s[i];
    const nextChar = s[i + 1];
    const [number, isIncrement] = getNumeric(char, nextChar);
    if (isIncrement) {
      i++;
    }
    i++;
    total += number;
  }
  return total;
}

console.log(romanToInt('IV'));
console.log(romanToInt('III'));
console.log(romanToInt('MCMXCIV'));
