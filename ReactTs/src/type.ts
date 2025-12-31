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

export interface ProductProps {
    name: string
    quntity: number
    price: number
}

export interface RequirmentProps {
    onSubmit(detail: {
        name: string, quantity: number, price: number
    }): void
}