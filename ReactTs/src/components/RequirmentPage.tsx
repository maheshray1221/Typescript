import React, { useState } from 'react'
import type { RequirmentProps } from '../type';


export const RequirmentPage = ({ onSubmit }: RequirmentProps) => {
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, quantity, price })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <label >Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                />
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
