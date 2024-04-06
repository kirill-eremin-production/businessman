import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

import { FurnitureItem } from '../../shared/types/furnitureItem.ts'

export type WarehouseItem = FurnitureItem
export type WarehouseItems = WarehouseItem[]

const warehouseAtom = atom<WarehouseItems>([])

export const useWarehouse = () => {
    const [warehouse, setWarehouse] = useAtom(warehouseAtom)

    const addItemsToWarehouse = useCallback((items: WarehouseItem[]) => {
        setWarehouse((prev) => [...prev, ...items])
    }, [])

    const removeItemFromWarehouse = useCallback((indexToRemove: number) => {
        setWarehouse((prev) =>
            prev.slice(0, indexToRemove).concat(prev.slice(indexToRemove + 1))
        )
    }, [])

    return { warehouse, addItemsToWarehouse, removeItemFromWarehouse }
}
