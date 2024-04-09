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

const mapIntToBanknote = [
    1, 5, 5, 10, 10, 10, 50, 50, 50, 50, 100, 100, 100, 100, 100, 500, 500, 500,
    1000, 1000,
]

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

        const n = getRandomInt(0, 100) * (deltaTime / 3)
        const shouldAddBuyer = n > 500

        if (shouldAddBuyer) {
            prevTime.current = time

            const itemsPrice = getRandomInt(0, 1000)

            const randomBanknote =
                mapIntToBanknote[getRandomInt(0, mapIntToBanknote.length - 1)]

            const money =
                (Math.floor(itemsPrice / randomBanknote) + 1) * randomBanknote

            addBuyer({
                name: `Buyer ${time}`,
                itemsPrice,
                money,
            })
        }
    }, [time])
}
