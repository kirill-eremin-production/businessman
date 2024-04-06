import { FC } from 'react'

import { useBuyers } from '../../entities/buyers'
import { Wallet } from '../../entities/money'
import { usePage } from '../../entities/page'
import { useSupermarket } from '../../entities/supermarket'
import { useTimer } from '../../entities/time'

import { Clock } from '../../features/clock'

import { StoreArea } from '../../widgets/StoreArea'

import styles from './Supermarket.module.css'

export type SupermarketProps = {}

export const Supermarket: FC<SupermarketProps> = (props) => {
    useTimer()

    const { setPage } = usePage()
    const { supermarketState, openSupermarket, closeSupermarket } =
        useSupermarket()
    const { buyers } = useBuyers()

    return (
        <div>
            <div className={styles.controls}>
                Supermarket ({supermarketState.isOpen ? 'Open' : 'Closed'})
                <div>
                    <button
                        onClick={() => {
                            if (supermarketState.isOpen) {
                                closeSupermarket()
                            } else {
                                openSupermarket()
                            }
                        }}
                    >
                        {supermarketState.isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                <Clock />
                <Wallet />
                <button onClick={() => setPage('map')}>Map</button>
                <button onClick={() => setPage('computer')}>Computer</button>
                <button onClick={() => setPage('warehouse')}>Warehouse</button>
                <button onClick={() => setPage('bank')}>Bank</button>
                <button onClick={() => setPage('cashier')}>
                    Buyers {buyers.length}
                </button>
            </div>
            <StoreArea />
        </div>
    )
}
