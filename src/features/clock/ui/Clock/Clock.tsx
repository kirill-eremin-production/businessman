import { ChevronsLeft, ChevronsRight, Pause } from '@gravity-ui/icons'
import { FC } from 'react'

import { Button } from '../../../../shared/components/Button'

import { useCreditsFlow } from '../../../../entities/bank/hooks/useCreditsFlow.ts'
import {
    humanize,
    useTime,
    useTimeSpeed,
    useTimer,
} from '../../../../entities/time'

import styles from './Clock.module.css'

export type ClockProps = {}

export const Clock: FC<ClockProps> = (props) => {
    useTimer()
    useCreditsFlow()

    const { time } = useTime()
    const { timeSpeed, setTimeSpeed } = useTimeSpeed()

    const onPauseButtonClick = () => setTimeSpeed(0)

    const onReduceTimeSpeedButtonClick = () => setTimeSpeed((prev) => prev - 1)

    const onAddTimeSpeedButtonClick = () => setTimeSpeed((prev) => prev + 1)

    return (
        <div className={styles.root}>
            <div className={styles.timeText}>{humanize(time)}</div>

            <Button isCircle onClick={onPauseButtonClick}>
                <Pause className={styles.icon} />
            </Button>
            <Button
                isCircle
                onClick={onReduceTimeSpeedButtonClick}
                disabled={timeSpeed < 1}
            >
                <ChevronsLeft className={styles.icon} />
            </Button>

            <div className={styles.timeSpeedText}>X{timeSpeed}</div>

            <Button isCircle onClick={onAddTimeSpeedButtonClick}>
                <ChevronsRight className={styles.icon} />
            </Button>
        </div>
    )
}
