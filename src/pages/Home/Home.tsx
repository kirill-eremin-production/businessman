import { Button } from '../../shared/components/Button'

import { useTranslate } from '../../entities/language/atom.ts'
import { usePage } from '../../entities/page'

import styles from './Home.module.css'

export const Home = () => {
    const t = useTranslate()

    const { setPage } = usePage()

    return (
        <div className={styles.root}>
            <div className={styles.background} />

            <div className={styles.content}>
                <div className={styles.title}>
                    BUSINESSMAN
                    <br />
                    SIMULATOR
                </div>
                <Button onClick={() => setPage('map')}>{t('play')}</Button>
            </div>
        </div>
    )
}
