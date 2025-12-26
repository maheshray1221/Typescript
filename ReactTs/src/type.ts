export interface TeaDetail {
    id: number
    name: string
    price: number
}

export interface CardProps {
    title: string
    price: number
    count: number
}

export interface AuthProps {
    onSubmit(detail: {
        name: string,
        email: string,
        password: number
    }
    ): void

}