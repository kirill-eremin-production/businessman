const HOUR = 60
const DAY = 24 * HOUR

export function humanize(draftTime: number): string {
    const time = draftTime + 8 * HOUR

    const days = Math.floor(time / DAY)

    const hours = Math.floor((time - DAY * days) / HOUR)
    const hoursText = hours < 10 ? `0${hours}` : `${hours}`

    const minutes = time - DAY * days - HOUR * hours
    const minutesText = minutes < 10 ? `0${minutes}` : `${minutes}`

    return `${days} days ${hoursText}:${minutesText}`
}
