import { getDays, getHours, getMinutes } from './common'

export function formatHours(hours: number): string {
    return hours < 10 ? `0${hours}` : `${hours}`
}

export function formatMinutes(minutes: number): string {
    return minutes < 10 ? `0${minutes}` : `${minutes}`
}

export function humanize(time: number): string {
    const days = getDays(time)

    const hours = formatHours(getHours(time))

    const minutes = formatMinutes(getMinutes(time))

    return `${days} days ${hours}:${minutes}`
}
