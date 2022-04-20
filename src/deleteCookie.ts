/**
 * 通过名称删除cookie
 * @param name
 */
const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export default deleteCookie;
