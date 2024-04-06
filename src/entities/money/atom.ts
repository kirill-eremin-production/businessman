import { atom } from 'jotai'
import { useAtom } from 'jotai/index'
import { useCallback, useEffect } from 'react'

import {
    getMoneyFromLocalStorage,
    setMoneyToLocalStorage,
} from './localStorage.ts'

export const moneyAtom = atom(getMoneyFromLocalStorage())

export function useMoney() {
    const [money, setMoney] = useAtom(moneyAtom)

    useEffect(() => {
        setMoneyToLocalStorage(money)
    }, [money])

    const addMoney = useCallback((count: number) => {
        setMoney((prev) => prev + count)
    }, [])

    const subtractMoney = useCallback((count: number) => {
        setMoney((prev) => prev - count)
    }, [])

    return {
        money,
        setMoney,
        addMoney,
        subtractMoney,
    }
}
