import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  children: ReactNode
}

/**
 * 通用 Button 组件
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : "",
    className,
  ].filter(Boolean).join(" ")

  return (
    <button
      className={classNames}
      disabled={disabled ?? loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}