import type { ProductProps } from "../type"
import { Product } from "./Product"

interface ListProps {
    items: ProductProps[]
}
export const ListProduct = ({ items }: ListProps) => {

    return (
        <div>
    
            {items.map((item) => (
                <Product name={item.name}
                    quntity={item.quntity}
                    price={item.price} />
            )

            )}
        </div>
    )
}
