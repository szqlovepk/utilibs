/**
 * 通过名称获取cookie
 * @param name
 * @returns
 */
const getCookie = (name: string) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts && parts.length === 2) {
    return (parts as Array<any>).pop().split(";").shift();
  }
};

export default getCookie;
