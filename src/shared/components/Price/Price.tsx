import { FC } from 'react'

import styles from './Price.module.css'

export type PriceProps = {
    price: number
}

export const Price: FC<PriceProps> = ({ price }) => {
    return <span>{price} ₽</span>
}
