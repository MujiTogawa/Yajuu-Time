const fill = str => ('0' + str).slice(-2)

export const getTime = (x, y) => {
  const dt = new Date()
  const h = dt.getHours()
  const m = dt.getMinutes()
  const s = dt.getSeconds()
  return `${fill(h)}:${fill(m)}:${fill(s)}`
}