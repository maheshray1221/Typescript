import React from 'react'
import type { PropsWithChildren, ReactNode } from "react";

interface SomthingProps extends PropsWithChildren {
    title: string
    footer?: ReactNode
}
export default function Card({ title, children, footer }: SomthingProps) {
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </div>
    )
}
