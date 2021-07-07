/**
 * @url https://jun-choi-4928.medium.com/javascript%EB%A1%9C-merge-sort-%EB%B3%91%ED%95%A9%EC%A0%95%EB%A0%AC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-c13c3eee6570
 * @url https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html
 * 1. 머지소트 JS
 * 2. 머지소트 설명
 */

const arr: number[] = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];

const mergeFunc = (left: number[], right: number[]): number[] => {
  const res: number[] = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] < right[0] ? res.push(<number>left.shift()) : res.push(<number>right.shift());
  }

  return [...res, ...left, ...right];
};

const mergeSortFunc = (list: number[]): number[] => {
  if (list.length === 1) {
    return list;
  }

  const middleIndex: number = Math.floor(list.length / 2);
  const left: number[] = list.slice(0, middleIndex);
  const right: number[] = list.slice(middleIndex);
  console.log({ left, right });

  return mergeFunc(mergeSortFunc(left), mergeSortFunc(right));
};

console.log(mergeSortFunc(arr));
