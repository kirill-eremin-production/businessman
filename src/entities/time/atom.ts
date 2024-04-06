import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

import {
    getTimeFromLocalStorage,
    setTimeToLocalStorage,
} from './localStorage.ts'

// Внутриигровое время в минутах
const timeAtom = atom(getTimeFromLocalStorage())
// Скорость течения времени
const timeSpeedAtom = atom(0)

export function useTime() {
    const [time, setTime] = useAtom(timeAtom)

    useEffect(() => {
        setTimeToLocalStorage(time)
    }, [time])

    return {
        time,
        setTime,
    }
}

export const useTimeSpeed = () => {
    const [timeSpeed, setTimeSpeed] = useAtom(timeSpeedAtom)

    return {
        timeSpeed,
        setTimeSpeed,
    }
}
