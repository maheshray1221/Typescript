import type { PropsWithChildren, ReactNode } from "react"

interface ChildProps extends PropsWithChildren {
    title: string
    footer: ReactNode
}

export const WorkWithChildren = ({ title, footer, children }: ChildProps) => {
    return (
        <div>
            <p>{title}</p>
            {footer && <footer>{footer}</footer>}
        </div>
    )
}
