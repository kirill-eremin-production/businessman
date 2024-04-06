import { FC } from 'react'

import { usePage } from '../../entities/page'
import { useSupermarketPositions } from '../../entities/supermarket'
import { useWarehouse } from '../../entities/warehouse'

import styles from './Warehouse.module.css'

export type WarehouseProps = {}

export const Warehouse: FC<WarehouseProps> = (props) => {
    const { warehouse, removeItemFromWarehouse } = useWarehouse()
    const { setPage } = usePage()
    const { addPosition } = useSupermarketPositions()

    return (
        <div>
            Warehouse
            {warehouse.map((item, index) => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <button
                            onClick={() => {
                                addPosition(item)
                                removeItemFromWarehouse(index)
                            }}
                        >
                            Place in store area
                        </button>
                    </div>
                )
            })}
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
        </div>
    )
}
