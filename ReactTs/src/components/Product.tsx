import type { ProductProps } from "../type"
export const Product = ({ name, quntity, price }: ProductProps) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Quntity: {quntity} pice</p>
            <p>Price: {price} Rs.</p>
            <p>-----------------------------------------------------------</p>
        </>
    )
}
