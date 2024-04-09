import cn from 'classnames'
import { FC } from 'react'

import { useBuyers } from '../../../../entities/buyers'
import { usePage } from '../../../../entities/page'

import styles from './CashierButton.module.css'

export type CashierButtonProps = {}

export const CashierButton: FC<CashierButtonProps> = (props) => {
    const { setPage } = usePage()
    const { buyers } = useBuyers()

    return (
        <button
            className={cn(styles.root, {
                [styles.disabled]: buyers.length === 0,
            })}
            disabled={buyers.length === 0}
            onClick={() => setPage('cashier')}
        >
            <div className={styles.buyersCount}>{buyers.length}</div>
        </button>
    )
}
