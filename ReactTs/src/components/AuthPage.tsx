import React, { useState } from "react"

import type { AuthProps } from "../type.ts"

export default function AuthPage({ onSubmit }: AuthProps) {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<number>(0)

    const hanndleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, email, password })
    }
    return (
        <div>
            <h2>AuthPage</h2>
            <form onSubmit={hanndleSubmit}>
                <label >Username</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)} />
                <label >Email</label>

                <input
                    type="text"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)} />
                <label >Password</label>

                <input
                    type="number"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(Number(e.target.value))} />

                <button>Submit</button>

            </form>
        </div>
    )
}
