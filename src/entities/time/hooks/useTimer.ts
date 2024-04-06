import { useEffect } from 'react'

import { useTime, useTimeSpeed } from '../atom.ts'

export function useTimer() {
    const { setTime } = useTime()
    const { timeSpeed } = useTimeSpeed()

    useEffect(() => {
        if (timeSpeed === 0) {
            return
        }

        const interval = setInterval(() => {
            setTime((prev) => prev + timeSpeed * timeSpeed)
            console.log('>>> time')
        }, 250)

        return () => {
            console.log('>>> clear useEffect')
            clearInterval(interval)
        }
    }, [timeSpeed])
}
