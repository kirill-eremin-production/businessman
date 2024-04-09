import { FC } from 'react'

import { usePage } from '../../../../entities/page'

import styles from './BankButton.module.css'

export type SupermarketButtonProps = {}

export const BankButton: FC<SupermarketButtonProps> = (props) => {
    const { setPage } = usePage()

    return <button className={styles.root} onClick={() => setPage('bank')} />
}
