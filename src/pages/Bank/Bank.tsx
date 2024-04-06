import { FC } from 'react'

import { useMoney } from '../../entities/money'
import { usePage } from '../../entities/page'

import styles from './Bank.module.css'

export type BankProps = {}

export const Bank: FC<BankProps> = (props) => {
    const { setPage } = usePage()
    const { money, addMoney } = useMoney()

    return (
        <div>
            <h1>Bank</h1>
            <div>Your money: ${money}</div>
            <button onClick={() => addMoney(100)}>Add 100$</button>
            <button onClick={() => addMoney(500)}>Add 500$</button>
            <button onClick={() => addMoney(1000)}>Add 1000$</button>
            <button onClick={() => addMoney(5000)}>Add 5000$</button>
            <hr />
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
        </div>
    )
}
