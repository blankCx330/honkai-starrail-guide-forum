import "./App.css"

/**
 * 应用根组件
 * 
 * 这是应用的入口组件，你可以在这里：
 * - 添加路由配置
 * - 包裹布局组件
 * - 设置全局状态
 */

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="text-blue-500">React + TypeScript + Redux</h1>
        <p>项目模板已初始化，请开始开发</p>
      </header>
      <main className="app-main">
        <p>
          在 <code>src/features/</code> 中创建你的功能模块
        </p>
      </main>
    </div>
  )
}