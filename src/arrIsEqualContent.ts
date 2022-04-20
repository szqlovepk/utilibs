/**
 * 判断数组内容是否相同 忽略顺序
 * @param arr1
 * @param arr2
 * @returns
 */
const arrIsEqualContent = (
  arr1: Array<string | number>,
  arr2: Array<string | number>
) => {
  let flag = true;
  if (arr1.length !== arr2.length) {
    flag = false;
  } else {
    arr1.forEach((item) => {
      if (arr2.indexOf(item) === -1) {
        flag = false;
      }
    });
  }
  return flag;
};

export default arrIsEqualContent;
