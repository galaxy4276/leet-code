/** @url https://leetcode.com/problems/shuffle-string/ */

const restoreString = (s: string, indices: number[]) => {
  const charList = [...s];
  const res: string[] = new Array(charList.length);

  for (const c of indices) {
    res[c] = charList[indices.indexOf(c)];
  }

  return res.join('');
};

console.log(`restoreString Result: ${restoreString('codeleet', [4,5,6,7,0,2,1,3])}`);
