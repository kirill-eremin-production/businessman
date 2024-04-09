import cn from 'classnames'
import { FC } from 'react'

import { useSupermarket } from '../../../../../entities/supermarket'
import { useTimeSpeed } from '../../../../../entities/time'

import styles from './OpenButton.module.css'

export type OpenButtonProps = {}

export const OpenButton: FC<OpenButtonProps> = (props) => {
    const { supermarketState, openSupermarket, closeSupermarket } =
        useSupermarket()
    const { setTimeSpeed } = useTimeSpeed()

    return (
        <button
            className={cn(styles.root, {
                [styles.close]: !supermarketState.isOpen,
            })}
            onClick={() => {
                if (supermarketState.isOpen) {
                    closeSupermarket()
                    setTimeSpeed(0)
                } else {
                    openSupermarket()
                    setTimeSpeed(1)
                }
            }}
        />
    )
}
