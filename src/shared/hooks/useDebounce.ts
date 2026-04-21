import { useState, useEffect } from "react"

/**
 * 防抖 Hook
 * 
 * 延迟更新值，适用于搜索输入、窗口调整等场景
 * 
 * @param value - 需要防抖的值
 * @param delay - 延迟时间（毫秒）
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}