import originJsonp from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') > -1 ? '&' : '?') + param(data)
  console.log(url)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param (data) {
  let str = ''
  for (let k in data) {
    let val = data[k] !== undefined ? data[k] : ''
    str += '&' + k + '=' + encodeURIComponent(val)
  }
  return str ? str.slice(1) : ''
}
