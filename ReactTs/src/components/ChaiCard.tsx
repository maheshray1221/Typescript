import type { CardProps } from "../type.ts"
export default function ChaiCard({ title, price, count }: CardProps) {
  return (
    <article>
      <h2>{title}{price}</h2>
      <span>{count}</span>
    </article>
  )
}
