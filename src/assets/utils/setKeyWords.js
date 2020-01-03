/**
 * 传入关键字和内容，将内容中含有关键字的部分添加对应的高亮样式
 * @param {*} keyword
 * @param {*} val
 */
export const filterSetKeyWords = (keyword, val, property) => {
  // 匹配关键字正则
  let replaceReg = new RegExp(keyword, 'g')
  // 高亮替换v-html值
  let replaceString =
    `<i style="color: #3399EA">${keyword}</i>`
  val.map((item) => {
    if (keyword && keyword.length > 0) {
      item[property] = item[property].replace(
        replaceReg,
        replaceString
      )
    }
  })
  return val
}
