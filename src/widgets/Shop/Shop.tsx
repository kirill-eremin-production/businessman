import { FC } from 'react'

import { FurnitureItems } from '../../shared/constants/furnitureItems.ts'

import { useBasket } from '../../entities/basket'
import { usePage } from '../../entities/page'

import styles from './Shop.module.css'

export type ShopProps = {}

export const Shop: FC<ShopProps> = (props) => {
    const { setPage } = usePage()
    const { basket, addItemsToBasket } = useBasket()

    return (
        <div>
            <div>
                <button onClick={() => setPage('computer')}>Computer</button>
                <button onClick={() => setPage('supermarket')}>
                    Supermarket
                </button>
                <button onClick={() => setPage('basket')}>
                    Basket {basket.length}
                </button>
            </div>
            {FurnitureItems.map((item, index) => {
                return (
                    <div key={index} className={styles.shopItem}>
                        <h1>{item.name}</h1>
                        <span>price: {item.price}</span>
                        <span>weight: {item.weight}</span>
                        <button
                            onClick={() => {
                                addItemsToBasket([item])
                            }}
                        >
                            Купить
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
