import { FC, useEffect, useState } from 'react'

import { Background } from '../../shared/components/Background'
import { Banknote } from '../../shared/components/Banknote'
import { Price } from '../../shared/components/Price'

import { useBuyers } from '../../entities/buyers'
import { useTranslate } from '../../entities/language/atom.ts'
import { Wallet, useMoney } from '../../entities/money'
import { usePage } from '../../entities/page'

import styles from './Cashier.module.css'

export type CashierProps = {}

export const Cashier: FC<CashierProps> = (props) => {
    const { buyers, removeBuyer } = useBuyers()
    const { setPage } = usePage()
    const translate = useTranslate()
    const { addMoney } = useMoney()

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

    useEffect(() => {
        if (buyers.length === 0) {
            setPage('supermarket')
        }
    }, [buyers.length])

    useEffect(() => {
        if (moneyForBuyerSum === deltaMoney) {
            addMoney(buyer.itemsPrice)
            removeBuyer(0)
            setMoneyForBuyer([])
        }
    }, [moneyForBuyerSum])

    return (
        <div>
            <Background image="cashierPage" />
            <Wallet />
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
            {buyer ? (
                <div className={styles.content}>
                    <div className={styles.description}>
                        <div>
                            {translate('itemsPrice')}:{' '}
                            <Price price={buyer.itemsPrice} />
                        </div>

                        <div>
                            {translate('buyersMoney')}:{' '}
                            <Price price={buyer.money} />
                        </div>
                    </div>

                    <div className={styles.banknotes}>
                        <Banknote
                            onClick={() => addMoneyForBuyer(1)}
                            value={1}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(5)}
                            value={5}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(10)}
                            value={10}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(50)}
                            value={50}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(100)}
                            value={100}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(500)}
                            value={500}
                        />
                        <Banknote
                            onClick={() => addMoneyForBuyer(1000)}
                            value={1000}
                        />
                    </div>

                    <div
                        className={styles.changeDescription}
                        style={{
                            color:
                                moneyForBuyerSum === deltaMoney
                                    ? 'green'
                                    : 'red',
                        }}
                    >
                        {translate('change')}:{' '}
                        <Price price={moneyForBuyerSum} /> /{' '}
                        <Price price={deltaMoney} />
                    </div>

                    <div className={styles.banknotes}>
                        {moneyForBuyer.map((money, index) => (
                            <Banknote
                                key={index}
                                onClick={() => removeMoneyForBuyer(index)}
                                value={money}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}
