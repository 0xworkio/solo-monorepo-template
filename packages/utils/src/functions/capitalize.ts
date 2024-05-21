// 将输入的字符串的首字母转换为大写。
export function capitalize(str?: string | null) {
  if (!str || typeof str !== 'string') return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
