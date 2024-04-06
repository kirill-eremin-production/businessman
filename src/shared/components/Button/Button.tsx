import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import styles from './Button.module.css'

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    isCircle?: boolean
    size?: 's' | 'm' | 'l'
}

export const Button: FC<ButtonProps> = ({ isCircle, size = 'm', ...props }) => {
    return (
        <button
            {...props}
            className={cn(styles.root, {
                [styles.circle]: isCircle,
                [styles[size]]: size,
            })}
        />
    )
}
