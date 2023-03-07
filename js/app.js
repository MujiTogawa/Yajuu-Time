import { getTime } from '/js/utils.js'

const dom = document.querySelector('.box')
setInterval(() => {
  dom.innerHTML = '当前时间: ' + getTime()
}, 1000 / 60)