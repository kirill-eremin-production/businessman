import { atom, useAtom } from 'jotai'

export type Page =
    | 'home'
    | 'map'
    | 'supermarket'
    | 'computer'
    | 'basket'
    | 'warehouse'
    | 'bank'
    | 'cashier'

const pageAtom = atom<Page>('home')

export const usePage = () => {
    const [page, setPage] = useAtom(pageAtom)

    return { page, setPage }
}
