import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

import { FurnitureItem } from '../../shared/types/furnitureItem.ts'

export type SupermarketState = {
    isOpen: boolean
}

const supermarketAtom = atom<SupermarketState>({
    isOpen: false,
})

export const useSupermarket = () => {
    const [supermarketState, setSupermarketState] = useAtom(supermarketAtom)

    const openSupermarket = useCallback(() => {
        setSupermarketState((prev) => ({ ...prev, isOpen: true }))
    }, [])

    const closeSupermarket = useCallback(() => {
        setSupermarketState((prev) => ({ ...prev, isOpen: false }))
    }, [])

    return {
        supermarketState,
        openSupermarket,
        closeSupermarket,
    }
}

export type SupermarketPosition = FurnitureItem

const supermarketPositionsAtom = atom<SupermarketPosition[]>([])

export const useSupermarketPositions = () => {
    const [supermarketPosition, setSupermatketPositions] = useAtom(
        supermarketPositionsAtom
    )

    const addPosition = useCallback((position: SupermarketPosition) => {
        setSupermatketPositions((prev) => [...prev, position])
    }, [])

    return { supermarketPosition, addPosition }
}
