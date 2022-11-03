import Cookie from "react-cookies";

let expirationTime = new Date(new Date().getTime() + 24 * 3600 * 1000);

export function setCookie(key, val) {
  Cookie.save(key, val, { expires: expirationTime });
}

export function getCookie(key) {
  return Cookie.load(key);
}

export function removeCookie(key) {
  Cookie.remove(key);
}
