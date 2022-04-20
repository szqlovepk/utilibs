/**
 * 空字符串 空数组 空对象值统一处理成null
 * @param values
 * @returns
 */
const filterEmptyValue = (values: object): any => {
  Object.keys(values).forEach((key) => {
    let type = Object.prototype.toString.call(values[key]);
    if (!values[key] && values[key] !== 0 && values[key] !== false)
      values[key] = null;
    else if (type === "[object Object]") {
      if (Object.keys(values[key]).length === 0) {
        values[key] = null;
      } else {
        filterEmptyValue(values[key]);
      }
    } else if (type === "[object Array]") {
      if (values[key].length === 0) {
        values[key] = null;
      } else {
        filterEmptyValue(values[key]);
      }
    }
  });
  return values;
};

export default filterEmptyValue;
