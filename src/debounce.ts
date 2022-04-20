/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func才会执行
 * 参数说明：
 * @param { function } func 回调函数
 * @param { number } wait 表示时间窗口的间隔
 * @param { boolean } immediate 设置为true时，是否立即调用函数
 **/
function debounce(func: Function, wait: number, immediate: boolean) {
  var timeout: any, args: any, context: any, timestamp: number, result: any;
  var later = function () {
    // 现在和上一次时间戳比较
    var last = Date.now() - timestamp;
    // 如果当前时间间隔少于设定时间且大于0就重新设置定时器
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      // 否则的话就是时间到了，执行回调函数
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    // 获得时间戳
    timestamp = Date.now();
    // 如果定时器不存在且立即执行函数
    var callNow = immediate && !timeout;
    // 如果定时器不存在就创建一个
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      // 如果需要立即执行函数的话，通过 apply 执行
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

export default debounce;
