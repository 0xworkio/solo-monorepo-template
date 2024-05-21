interface SWRError extends Error {
  status: number
}
// fetcher ：一个泛型异步函数，用于发起网络请求。它接收一个URL和可选的请求初始化对象，然后返回一个JSON响应。
// 参数：
// input: 请求的URL。
// init: 可选的请求初始化对象。
// 功能：发送HTTP请求并返回一个JSON响应。

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const error = await res.text()
    const err = new Error(error) as SWRError
    err.status = res.status
    throw err
  }

  return res.json()
}
