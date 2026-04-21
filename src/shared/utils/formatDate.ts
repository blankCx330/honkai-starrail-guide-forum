/**
 * 日期格式化工具
 * 
 * @param date - Date 对象或日期字符串
 * @param format - 格式字符串（默认 YYYY-MM-DD）
 */
export function formatDate(date: Date | string, format = "YYYY-MM-DD"): string {
  const d = new Date(date)
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  const hours = String(d.getHours()).padStart(2, "0")
  const minutes = String(d.getMinutes()).padStart(2, "0")
  
  return format
    .replace("YYYY", String(year))
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hours)
    .replace("mm", minutes)
}