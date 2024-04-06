import { FC } from 'react'

import { useSupermarketPositions } from '../../entities/supermarket'

import styles from './StoreArea.module.css'

export type StoreAreaProps = {}

export const StoreArea: FC<StoreAreaProps> = (props) => {
    const { supermarketPosition } = useSupermarketPositions()

    return (
        <div className={styles.root}>
            StoreArea
            <div>
                {supermarketPosition.map(({ name }) => {
                    return <div>{name}</div>
                })}
            </div>
        </div>
    )
}
