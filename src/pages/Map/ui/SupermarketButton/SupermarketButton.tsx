import { FC } from 'react'

import { usePage } from '../../../../entities/page'

import styles from './SupermarketButton.module.css'

export type SupermarketButtonProps = {}

export const SupermarketButton: FC<SupermarketButtonProps> = (props) => {
    const { setPage } = usePage()

    return (
        <button
            className={styles.root}
            onClick={() => setPage('supermarket')}
        />
    )
}
