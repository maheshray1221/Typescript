import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState<number>(0)
    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>count {counter}</h2>
            <button
                onClick={() => handleIncrement()}
            >increment +1</button>
            <button
                onClick={() => handleDecrement()}
            >decrement -1</button>
        </div>
    )
}
