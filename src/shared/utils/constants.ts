/**
 * 全局常量
 */

// API 相关
export const API_BASE_URL: string = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ""

// 应用相关
export const APP_NAME = "React Redux Template"

// 其他
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB