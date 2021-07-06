
function longestCommonPrefix(strs: string[]) {
  let prefix = strs[0].split('');
  for(let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const newCommon = [];

    for(let i = 0; i < str.length; i++) {
      if (str[i] !== prefix[i]) {
        break;
      }
      newCommon.push(str[i]);
    }

    prefix = newCommon;
  }

  return prefix.join('');
}
