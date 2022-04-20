/**
 * 清除字符串所有空格
 * @param str
 * @returns
 */
const removeAllSpace = (str: string) => {
  return str && Object.prototype.toString.call(str) === "[object String]"
    ? str.replace(/\s+/g, "")
    : str;
};

export default removeAllSpace;
