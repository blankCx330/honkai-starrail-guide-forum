import type { ReactNode } from "react"
import styles from "./MainLayout.module.css"

type MainLayoutProps = {
  children: ReactNode
}

/**
 * 主布局组件
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>App</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Your App</p>
      </footer>
    </div>
  )
}