/**
 * 延迟函数
 * @param delay 延迟时间
 * @returns
 */
export function sleep(delay = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay))
}

/**
 * 防抖函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @returns
 */
export function debounce(func: () => void, wait = 0): () => void {
  let timeout: null | NodeJS.Timeout = null
  return function (this: any, ...args: any) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/**
 * 节流函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function throttle(func: () => void, wait = 0): () => void {
  let previous = 0
  return function (this: any, ...args: any) {
    const now = Date.now()
    if (now - previous > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}
