import { Background } from '../../shared/components/Background'
import { Button } from '../../shared/components/Button'

import { useTranslate } from '../../entities/language/atom.ts'
import { usePage } from '../../entities/page'

import styles from './Home.module.css'

export const Home = () => {
    const translate = useTranslate()

    const { setPage } = usePage()

    return (
        <div className={styles.root}>
            <Background image="homePage" />

            <div className={styles.content}>
                <div className={styles.title}>
                    BUSINESSMAN
                    <br />
                    SIMULATOR
                </div>
                <Button onClick={() => setPage('map')}>
                    {translate('play')}
                </Button>
                <Button
                    onClick={() => {
                        const isConfirmed = confirm(
                            translate('clearDataConfirmation')
                        )

                        if (isConfirmed) {
                            localStorage.clear()
                            window.location.reload()
                        }
                    }}
                >
                    {translate('clearData')}
                </Button>
            </div>
        </div>
    )
}
