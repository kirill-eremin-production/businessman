import { FC } from 'react'

import { Background } from '../../shared/components/Background'

import { useBuyers } from '../../entities/buyers'
import { Wallet } from '../../entities/money'
import { usePage } from '../../entities/page'

import { Clock } from '../../features/clock'
import { OpenButton } from '../../features/supermarket/close-open'

import { StoreArea } from '../../widgets/StoreArea'

import styles from './Supermarket.module.css'

import { CashierButton } from './ui/CashierButton'

export type SupermarketProps = {}

export const Supermarket: FC<SupermarketProps> = (props) => {

    const { setPage } = usePage()

    const { buyers } = useBuyers()

    return (
        <div>
            <Background image={'supermarketPage'} />

            <div className={styles.controls}>
                <div></div>
                <Wallet />
                <button onClick={() => setPage('map')}>Map</button>
                {/*<button onClick={() => setPage('computer')}>Computer</button>*/}
                {/*<button onClick={() => setPage('warehouse')}>Warehouse</button>*/}
            </div>

            {/*<StoreArea />*/}
            <CashierButton />

            <Clock />
            <OpenButton />
        </div>
    )
}
