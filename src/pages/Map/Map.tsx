import { FC } from 'react'

import { Wallet } from '../../entities/money'
import { usePage } from '../../entities/page'
import { useTimer } from '../../entities/time'

import { Clock } from '../../features/clock'

import styles from './Map.module.css'

export type MapProps = {}

export const Map: FC<MapProps> = (props) => {
    useTimer()

    const { setPage } = usePage()

    return (
        <div className={styles.root}>
            <div className={styles.background} />
            Map
            <Clock />
            <Wallet />
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
        </div>
    )
}
