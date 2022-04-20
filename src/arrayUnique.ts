/**
 * 一维数组去重
 * @param arr
 * @returns
 */
const arrayUnique = (arr: Array<string | number>) => {
  let hash: Array<string | number> = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash.indexOf(arr[i]) === -1) {
      hash.push(arr[i]);
    }
  }
  return hash;
};

export default arrayUnique;
