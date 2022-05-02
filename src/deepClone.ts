/**
 * 深拷贝
 * @param obj 需要深拷贝的对象
 * @returns
 */
const deepClone = (obj: Object) => {
  // 不是引用类型或者是null的话直接返回
  if (typeof obj !== "object" || typeof obj == null) {
    return obj;
  }
  // 初始化结果
  let result: object;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};

export default deepClone;
