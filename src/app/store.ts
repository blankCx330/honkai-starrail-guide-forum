import { configureStore } from "@reduxjs/toolkit"

/**
 * Redux Store 配置
 * 
 * 这是一个最小化的 Store 配置，你可以根据需要添加 reducer。
 * 
 * 添加 reducer 的步骤：
 * 1. 在 src/features/[功能]/ 创建 xxxSlice.ts
 * 2. 在这里导入并添加到 reducer 对象中
 * 
 * 示例：
 * import { counterSlice } from "../features/counter/counterSlice"
 * 
 * const store = configureStore({
 *   reducer: {
 *     counter: counterSlice,
 *   },
 * })
 */

// 创建 store
export const store = configureStore({
  reducer: {},
})

// 类型导出（TypeScript 必需）
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store