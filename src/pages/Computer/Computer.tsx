import { FC } from 'react'

import { Shop } from '../../widgets/Shop'

import styles from './Computer.module.css'

export type ComputerProps = {}

export const Computer: FC<ComputerProps> = (props) => {
    return (
        <div>
            <Shop />
        </div>
    )
}
