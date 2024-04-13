import { useEffect } from 'react'

import { useMoney } from '../../money'
import { useTime } from '../../time'
import { DAY } from '../../time/constants.ts'
import { useBank } from '../atom.ts'

export const useCreditsFlow = () => {
    const { time } = useTime()
    const { bankData, updateCredit, removeCredit } = useBank()
    const { subtractMoney } = useMoney()

    useEffect(() => {
        if (!bankData) {
            return
        }

        bankData.credits.forEach((credit, id) => {
            if (time >= credit.nextPaymentTime && credit.currentSum > 0) {
                subtractMoney(credit.dailyPayment)

                const newSum = credit.currentSum - credit.dailyPayment

                updateCredit(id, {
                    ...credit,
                    currentSum: newSum,
                    nextPaymentTime: credit.nextPaymentTime + DAY,
                    currentDays: credit.currentDays - 1,
                })

                if (newSum <= 0) {
                    removeCredit(id)
                }
            }
        })
    }, [time, subtractMoney])
}
