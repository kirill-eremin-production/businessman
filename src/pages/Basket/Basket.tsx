import { FC } from 'react'

import { useBasket } from '../../entities/basket'
import { useMoney } from '../../entities/money'
import { usePage } from '../../entities/page'
import { useWarehouse } from '../../entities/warehouse'

import styles from './Basket.module.css'

export type BasketProps = {}

export const Basket: FC<BasketProps> = (props) => {
    const { setPage } = usePage()
    const {
        basket,
        itemsPrice,
        itemsWeight,
        deliveryPrice,
        totalPrice,
        clearBasket,
    } = useBasket()
    const { money, subtractMoney } = useMoney()
    const { addItemsToWarehouse } = useWarehouse()

    return (
        <div>
            Basket
            <div>Your money {money}</div>
            <button onClick={() => setPage('computer')}>Computer</button>
            <button onClick={() => setPage('supermarket')}>Supermarket</button>
            <button onClick={() => setPage('warehouse')}>Warehouse</button>
            {basket.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <div>price {item.price}</div>
                        <div>weight {item.weight}</div>
                    </div>
                )
            })}
            <hr/>
            <div>Items weight: {itemsWeight}</div>
            <div>Items price: {itemsPrice}</div>
            <div>Delivery price: {deliveryPrice}</div>
            <div>Total price: {totalPrice}</div>
            <button
                disabled={money < totalPrice}
                onClick={() => {
                    subtractMoney(totalPrice)
                    addItemsToWarehouse(basket)
                    clearBasket()
                }}
            >
                Buy
            </button>
        </div>
    )
}
