import { FC, useState } from 'react'

import { Background } from '../../shared/components/Background'
import { Button } from '../../shared/components/Button'

import { useBank } from '../../entities/bank/atom.ts'
import { useTranslate } from '../../entities/language/atom.ts'
import { Wallet, useMoney } from '../../entities/money'
import { usePage } from '../../entities/page'
import { humanize, useTime } from '../../entities/time'
import { DAY } from '../../entities/time/constants.ts'
import { getDays } from '../../entities/time/utils/common.ts'

import { Clock } from '../../features/clock'

import styles from './Bank.module.css'

export type BankProps = {}

export const Bank: FC<BankProps> = (props) => {
    const translate = useTranslate()
    const { setPage } = usePage()
    const { money, addMoney, subtractMoney } = useMoney()
    const { bankData, addCredit, removeCredit } = useBank()
    const hasCredits = bankData && bankData.credits.length > 0
    const { time } = useTime()

    const percent = 0.015
    const [creditSize, setCreditSize] = useState(5000)
    const [creditDays, setCreditDays] = useState(10)

    const overpayment = creditSize * percent * creditDays
    const creditSum = creditSize + overpayment
    const dailyPayment = Math.round(creditSum / creditDays)

    const onTakeCreditButtonClick = () => {
        addCredit({
            size: creditSize,
            days: creditDays,
            overpayment,
            sum: creditSum,
            dailyPayment,

            nextPaymentTime: (getDays(time) + 1) * DAY,
            currentDays: creditDays,
            currentSum: creditSum,
        })
        addMoney(creditSize)
    }

    return (
        <div>
            <Background image="bankPage" />
            <Wallet />
            <Clock />

            <div className={styles.content}>
                {bankData && bankData.credits.length > 0 ? (
                    <div>
                        {bankData.credits.map((credit, index) => {
                            return (
                                <div key={index}>
                                    <div>Сумма кредита: {credit.sum}</div>
                                    <div>
                                        Дневной платеж: {credit.dailyPayment}
                                    </div>
                                    <div>
                                        Оставшееся количество дней:{' '}
                                        {credit.currentDays}
                                    </div>
                                    <div>
                                        Оставшийся размер кредита:{' '}
                                        {credit.currentSum}
                                    </div>
                                    <div>
                                        Следующий платеж:{' '}
                                        {humanize(credit.nextPaymentTime)}
                                    </div>
                                    <Button
                                        onClick={() => {
                                            removeCredit(index)
                                            subtractMoney(credit.currentSum)
                                        }}
                                        disabled={credit.currentSum > money}
                                    >
                                        Погасить досрочно
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                ) : null}

                <div>{creditSize}</div>
                <input
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        setCreditSize(Number(event.target.value))
                    }}
                    value={creditSize}
                    type="range"
                    min={5000}
                    max={5000000}
                    step={5000}
                />

                <div>{creditDays}</div>
                <input
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        setCreditDays(Number(event.target.value))
                    }}
                    value={creditDays}
                    type="range"
                    min={10}
                    max={360}
                    step={1}
                />

                <div>Сумма кредита: {creditSum}</div>

                <div>Дневной платеж: {dailyPayment}</div>

                <Button onClick={onTakeCreditButtonClick} disabled={hasCredits}>
                    {translate('takeLoan')}
                </Button>

                <button onClick={() => setPage('map')}>map</button>
            </div>
        </div>
    )
}
