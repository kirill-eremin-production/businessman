import { useBuyersFlow } from './entities/buyers/hooks/useBuyersFlow.ts'
import { usePage } from './entities/page'

import { Bank } from './pages/Bank'
import { Basket } from './pages/Basket'
import { Cashier } from './pages/Cashier'
import { Computer } from './pages/Computer'
import { Home } from './pages/Home'
import { Map } from './pages/Map'
import { Supermarket } from './pages/Supermarket'
import { Warehouse } from './pages/Warehouse'

import styles from './App.module.css'

function App() {
    const { page: pageName } = usePage()
    useBuyersFlow()

    let page = null

    if (pageName === 'home') {
        page = <Home />
    }

    if (pageName === 'map') {
        page = <Map />
    }

    if (pageName === 'supermarket') {
        page = <Supermarket />
    }

    if (pageName === 'computer') {
        page = <Computer />
    }

    if (pageName === 'basket') {
        page = <Basket />
    }

    if (pageName === 'warehouse') {
        page = <Warehouse />
    }

    if (pageName === 'bank') {
        page = <Bank />
    }

    if (pageName === 'cashier') {
        page = <Cashier />
    }

    return <div className={styles.root}>{page}</div>
}

export default App
