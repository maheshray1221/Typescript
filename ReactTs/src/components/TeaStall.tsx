import type { CardProps } from "../type.ts"
import ChaiCard from "./ChaiCard.tsx"

interface Chailist {
    items: CardProps[]
}
export default function TeaStall({ items }: Chailist) {
    return (
        <div>
            {items.map((item) => (
                <ChaiCard
                    count={item.count}
                    title={item.title}
                    price={item.price} />
            ))}
        </div>
    )
}
