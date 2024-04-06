import { FC } from 'react'

import styles from './Wallet.module.css'

import { useMoney } from '../../atom.ts'

export type WalletProps = {}

export const Wallet: FC<WalletProps> = (props) => {
    const { money } = useMoney()

    return <div>$ {money}</div>
}
