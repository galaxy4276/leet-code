const duplicateZeros = (arr: number[]): void => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i++;
    }
  }
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));

