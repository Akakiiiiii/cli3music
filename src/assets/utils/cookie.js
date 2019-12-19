export const getCookie = _name => {
  let name = _name + '='
  let Cookies = document.cookie.split(';')
  for (let i = 0; i < Cookies.length; i++) {
    let Cookie = Cookies[i]
    while (Cookie.charAt(0) === '') {
      Cookie = Cookie.substring(1)
    }
    if (Cookie.indexOf(name) !== -1) {
      return Cookie.substring(name.length, Cookie.length)
    }
  }
  return ''
}

export const setCookie = (name, value, expires, path, domain, secure) => {
  let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires.toGMTString()
  }
  if (path) {
    cookieText += '; path=' + path
  }
  if (domain) {
    cookieText += '; domain=' + domain
  }
  if (secure) {
    cookieText += '; secure'
  }
  document.cookie = cookieText
}
