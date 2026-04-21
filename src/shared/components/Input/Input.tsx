import type { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

/**
 * 通用 Input 组件
 */
export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={[styles.input, error ? styles.error : "", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}