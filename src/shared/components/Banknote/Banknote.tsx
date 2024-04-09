import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import styles from './Banknote.module.css'

export type BanknoteProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    value: 1 | 5 | 10 | 50 | 100 | 500 | 1000
}

export const Banknote: FC<BanknoteProps> = ({ value, ...rest }) => {
    return (
        <button
            {...rest}
            className={cn(styles.root, {
                [styles.value1]: value === 1,
                [styles.value5]: value === 5,
                [styles.value10]: value === 10,
                [styles.value50]: value === 50,
                [styles.value100]: value === 100,
                [styles.value500]: value === 500,
                [styles.value1000]: value === 1000,
            })}
        />
    )
}
