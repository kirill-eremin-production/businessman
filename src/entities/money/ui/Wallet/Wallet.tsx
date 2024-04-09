import { FC } from 'react'

import { Price } from '../../../../shared/components/Price'

import styles from './Wallet.module.css'

import { useMoney } from '../../atom.ts'

export type WalletProps = {}

export const Wallet: FC<WalletProps> = (props) => {
    const { money } = useMoney()

    return (
        <div className={styles.root}>
            <div className={styles.icon} />
            <div className={styles.text}>
                <Price price={money} />
            </div>
        </div>
    )
}
