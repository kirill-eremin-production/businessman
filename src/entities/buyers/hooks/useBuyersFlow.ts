import { useEffect, useRef } from 'react'

import { useSupermarket } from '../../supermarket'
import { useTime } from '../../time'
import { useBuyers } from '../atom.ts'

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min) // Ensure the minimum is a whole number
    max = Math.floor(max) // Ensure the maximum is a whole number
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const useBuyersFlow = () => {
    const { supermarketState } = useSupermarket()
    const { addBuyer } = useBuyers()
    const { time } = useTime()

    const prevTime = useRef<number>()

    useEffect(() => {
        if (!supermarketState.isOpen) {
            return
        }

        if (!prevTime.current) {
            prevTime.current = time
        }

        const deltaTime = time - prevTime.current

        const n = getRandomInt(0, 100) * (deltaTime / 15)
        const shouldAddBuyer = n > 500
        console.log('> shouldAddBuyer', { deltaTime, n, shouldAddBuyer })

        if (shouldAddBuyer) {
            prevTime.current = time

            const itemsPrice = getRandomInt(0, 1000)
            const money = getRandomInt(itemsPrice, itemsPrice + 1000)

            addBuyer({
                name: `Buyer ${time}`,
                itemsPrice,
                money,
            })
        }
    }, [time])
}
