import { atom, useAtom } from 'jotai'

export type Buyer = {
    name: string
    itemsPrice: number
    money: number
}

const buyersAtom = atom<Buyer[]>([])

export const useBuyers = () => {
    const [buyers, setBuyers] = useAtom(buyersAtom)

    const addBuyer = (buyer: Buyer) => {
        setBuyers((prev) => [...prev, buyer])
    }

    const removeBuyer = (index: number) => {
        setBuyers((prev) => {
            const newState = [...prev]
            newState.splice(index, 1)
            return newState
        })
    }

    return { buyers, addBuyer, removeBuyer }
}
