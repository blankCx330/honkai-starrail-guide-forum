import { clsx, type ClassValue } from "clsx"

/**
 * className 合并工具
 * 
 * 使用 clsx 合并多个 className
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}