export const nanoid = async (chars?: number) => {
  const { customAlphabet } = await import('nanoid')
  return customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    chars || 7,
  )()
}
