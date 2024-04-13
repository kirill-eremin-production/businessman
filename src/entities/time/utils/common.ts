import { DAY, HOUR } from '../constants'

export function getDays(time: number): number {
    return Math.floor(time / DAY)
}

export function getHours(time: number): number {
    return Math.floor((time % DAY) / HOUR)
}

export function getMinutes(time: number): number {
    return time % HOUR
}
