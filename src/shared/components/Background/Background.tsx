import cn from 'classnames'
import { FC } from 'react'

import styles from './Background.module.css'

export type BackgroundProps = {
    image:
        | 'homePage'
        | 'cityMapPage'
        | 'supermarketPage'
        | 'cashierPage'
        | 'bankPage'
}

export const Background: FC<BackgroundProps> = ({ image }) => {
    return (
        <div
            className={cn(styles.root, {
                [styles.cityMapPage]: image === 'cityMapPage',
                [styles.homePage]: image === 'homePage',
                [styles.supermarketPage]: image === 'supermarketPage',
                [styles.cashierPage]: image === 'cashierPage',
                [styles.bankPage]: image === 'bankPage',
            })}
        />
    )
}
