/**
 * Date转换字符串
 * @param theDate
 * @returns
 */
const getDateStr = (theDate: Date) => {
  let _hour: number | string = theDate.getHours();
  let _minute: number | string = theDate.getMinutes();
  let _second: number | string = theDate.getSeconds();
  let _year: number | string = theDate.getFullYear();
  let _month: number | string = theDate.getMonth();
  let _date: number | string = theDate.getDate();

  if (_hour < 10) {
    _hour = "0" + _hour;
  }

  if (_minute < 10) {
    _minute = "0" + _minute;
  }

  if (_second < 10) {
    _second = "0" + _second;
  }

  _month = _month + 1;

  if (_month < 10) {
    _month = "0" + _month;
  }

  if (_date < 10) {
    _date = "0" + _date;
  }

  return (
    _year +
    "-" +
    _month +
    "-" +
    _date +
    " " +
    _hour +
    ":" +
    _minute +
    ":" +
    _second
  );
};

export default getDateStr;
