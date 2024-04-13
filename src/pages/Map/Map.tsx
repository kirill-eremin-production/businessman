import { FC } from 'react'

import { Background } from '../../shared/components/Background'

import { Wallet } from '../../entities/money'
import { usePage } from '../../entities/page'

import { Clock } from '../../features/clock'

import styles from './Map.module.css'

import { BankButton } from './ui/BankButton'
import { SupermarketButton } from './ui/SupermarketButton'

export type MapProps = {}

export const Map: FC<MapProps> = (props) => {

    const { setPage } = usePage()

    return (
        <div className={styles.root}>
            <Background image="cityMapPage" />
            <Clock />
            <Wallet />
            <button onClick={() => setPage('home')}>Home</button>
            <BankButton />
            <SupermarketButton />
        </div>
    )
}
