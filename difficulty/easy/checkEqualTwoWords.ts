const map = new Map();
const alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const makeAlphabetMap = (list: string[]): void => {
  for (let i = 0; i < list.length; i++) {
    map.set(list[i], i);
  }
};

const getAlphabetIndexString = (str: string): number => {
  const strToArray = str.split('');
  const result: number[] = [];
  for (const element of strToArray) {
    const index = alphabetList.findIndex((value) => value === element);
    result.push(index);
  }

  return Number(result.join(''));
};

const isSumEqual = (firstWord: string, secondWord: string, targetWord: string): boolean => {
  makeAlphabetMap(alphabetList);
  const first = getAlphabetIndexString(firstWord);
  const second = getAlphabetIndexString(secondWord);
  const target = getAlphabetIndexString(targetWord);

  return ((first + second) === target) ? true : false;
};

console.log(`isSumEqual result: ${isSumEqual('acb', 'cba', 'cdb')}`);

const getIndex = (char: string) => alphabetList.indexOf(char);
const isSumEqualBestSolution = (firstWord: string, secondWord: string, targetWord: string): boolean => {
  const first = Number([...firstWord].map(getIndex).join(''));
  const second = Number([...secondWord].map(getIndex).join(''));
  const target = Number([...targetWord].map(getIndex).join(''));

  return ((first + second) === target) ? true : false;
};

console.log(`isSumEqual result: ${isSumEqualBestSolution('acb', 'cba', 'cdb')}`);
