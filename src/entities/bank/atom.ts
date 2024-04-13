import { atom } from 'jotai'
import { useAtom } from 'jotai/index'
import { useCallback, useEffect } from 'react'

import {
    getBankDataFromLocalStorage,
    setBankDataToLocalStorage,
} from './localStorage.ts'
import { BankData, Credit } from './types.ts'

export const bankDataAtom = atom<BankData | undefined>(
    getBankDataFromLocalStorage()
)

export function useBank() {
    const [bankData, setBankData] = useAtom(bankDataAtom)

    useEffect(() => {
        if (bankData) {
            setBankDataToLocalStorage(bankData)
        }
    }, [JSON.stringify(bankData)])

    const addCredit = useCallback(
        (credit: Credit) => {
            const prevCredits = bankData?.credits || []

            setBankData({
                ...bankData,
                credits: [...prevCredits, credit],
            })
        },
        [JSON.stringify(bankData)]
    )

    const updateCredit = useCallback(
        (id: number, data: Credit) => {
            const prevCredits = bankData?.credits || []

            setBankData({
                ...bankData,
                credits: prevCredits.map((credit, index) => {
                    if (index === id) {
                        return data
                    }
                    return credit
                }),
            })
        },
        [JSON.stringify(bankData)]
    )

    const removeCredit = useCallback(
        (id: number) => {
            const prevCredits = bankData?.credits || []

            setBankData({
                ...bankData,
                credits: prevCredits.filter((_, index) => index !== id),
            })
        },
        [JSON.stringify(bankData)]
    )

    return { bankData, addCredit, updateCredit, removeCredit }
}
