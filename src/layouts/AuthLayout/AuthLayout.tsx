import type { ReactNode } from "react"
import styles from "./AuthLayout.module.css"

type AuthLayoutProps = {
  children: ReactNode
}

/**
 * 认证页面布局（登录/注册）
 */
export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}