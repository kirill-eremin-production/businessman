import { FC, useState } from 'react'

import { useBuyers } from '../../entities/buyers'
import { useMoney } from '../../entities/money'
import { usePage } from '../../entities/page'

import styles from './Cashier.module.css'

export type CashierProps = {}

export const Cashier: FC<CashierProps> = (props) => {
    const { buyers, removeBuyer } = useBuyers()
    const { setPage } = usePage()
    const { money, addMoney } = useMoney()

    const [moneyForBuyer, setMoneyForBuyer] = useState<number[]>([])

    const buyer = buyers[0]

    const deltaMoney = buyer?.money - buyer?.itemsPrice

    const addMoneyForBuyer = (money: number) => {
        setMoneyForBuyer((prevState) => [...prevState, money])
    }

    const removeMoneyForBuyer = (index: number) => {
        setMoneyForBuyer((prevState) => {
            const newState = [...prevState]
            newState.splice(index, 1)
            return newState
        })
    }

    const moneyForBuyerSum = moneyForBuyer.reduce((acc, curr) => acc + curr, 0)

    return (
        <div>
            Cashier
            <div>Your money {money}$</div>
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
            <pre>{JSON.stringify(buyer, null, 2)}</pre>
            <div>Delta = {deltaMoney}</div>
            {buyer ? (
                <div>
                    <hr />
                    <button onClick={() => addMoneyForBuyer(1)}>1$</button>
                    <button onClick={() => addMoneyForBuyer(5)}>5$</button>
                    <button onClick={() => addMoneyForBuyer(10)}>10$</button>
                    <button onClick={() => addMoneyForBuyer(25)}>25$</button>
                    <button onClick={() => addMoneyForBuyer(50)}>50$</button>
                    <button onClick={() => addMoneyForBuyer(100)}>100$</button>
                    <button onClick={() => addMoneyForBuyer(250)}>250$</button>
                    <button onClick={() => addMoneyForBuyer(500)}>500$</button>
                    <button onClick={() => addMoneyForBuyer(1000)}>
                        1000$
                    </button>
                    <hr />
                    <div
                        style={{
                            color:
                                moneyForBuyerSum === deltaMoney
                                    ? 'green'
                                    : 'red',
                        }}
                    >
                        {moneyForBuyerSum} / {deltaMoney}
                    </div>
                    {moneyForBuyer.map((money, index) => (
                        <button
                            style={{ color: 'red' }}
                            key={index}
                            onClick={() => removeMoneyForBuyer(index)}
                        >
                            {money}
                        </button>
                    ))}
                    {moneyForBuyerSum === deltaMoney ? (
                        <button
                            onClick={() => {
                                addMoney(buyer.itemsPrice)
                                removeBuyer(0)
                                setMoneyForBuyer([])
                            }}
                        >
                            Submit
                        </button>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}
