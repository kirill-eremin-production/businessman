import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

import { FurnitureItem } from '../../shared/types/furnitureItem.ts'

export type BasketItem = FurnitureItem
export type BasketItems = BasketItem[]

const basketAtom = atom<BasketItems>([])

export const useBasket = () => {
    const [basket, setBasket] = useAtom(basketAtom)

    const addItemsToBasket = useCallback((items: BasketItem[]) => {
        setBasket((prev) => [...prev, ...items])
    }, [])

    const removeItemFromBasket = useCallback((indexToRemove: number) => {
        setBasket((prev) =>
            prev.slice(0, indexToRemove).concat(prev.slice(indexToRemove + 1))
        )
    }, [])

    const clearBasket = useCallback(() => {
        setBasket([])
    }, [])

    let itemsPrice = 0
    let itemsWeight = 0

    basket.forEach(({ price, weight }) => {
        itemsPrice += price
        itemsWeight += weight
    })

    // Стоимость доставки - 10 денег за 50 кг
    const deliveryPrice = Math.ceil(itemsWeight / 50) * 10

    const totalPrice = itemsPrice + deliveryPrice

    return {
        basket,
        addItemsToBasket,
        removeItemFromBasket,
        itemsPrice,
        itemsWeight,
        deliveryPrice,
        totalPrice,
        clearBasket,
    }
}
