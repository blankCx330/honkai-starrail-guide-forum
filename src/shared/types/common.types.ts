/**
 * API 响应通用类型
 */
export type ApiResponse<T> = {
  data: T
  status: number
  message: string
}

/**
 * 分页响应类型
 */
export type PaginatedResponse<T> = {
  data: T[]
  total: number
  page: number
  pageSize: number
}

/**
 * 异步状态类型
 */
export type AsyncState<T> = {
  data: T | null
  isLoading: boolean
  error: string | null
}