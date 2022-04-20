const isDot = (num) => {
  let result = num.toString().indexOf(".");
  return result > 0 ? true : false;
};
/**
 * 判断是否为正整数或0
 * @param value
 * @param isZero 0的时候也返回true
 * @returns
 */
const isInteger = (value: string | number, isZero: boolean) =>
  isZero
    ? !isNaN(value as number) &&
      (value as number) % 1 === 0 &&
      !isDot(value) &&
      value >= 0
      ? true
      : false
    : !isNaN(value as number) &&
      (value as number) % 1 === 0 &&
      !isDot(value) &&
      value > 0
    ? true
    : false;

export default isInteger;
