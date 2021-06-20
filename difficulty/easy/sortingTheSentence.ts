/** @url https://leetcode.com/problems/sorting-the-sentence/ */

const sortLogic = (a: string, b: string) => {
  if (a[a.length - 1] > b[b.length - 1]) {
    return 1;
  }
  return -1;
}

const deleteNumberOrder = (s: string[]) => s.map((s) => s.slice(0, s.length - 1));
const sortSentence = (s: string) => deleteNumberOrder(s.split(' ').sort(sortLogic)). join(' ');

console.log(`sortSentence Result: ${sortSentence('is2 sentence4 This1 a3')}`);
