import { LocalStorageKeys } from '../../shared/constants/localStorageKeys.ts'

export function getTimeFromLocalStorage(): number {
    return Number(localStorage.getItem(LocalStorageKeys.TIME)) || 0
}

export function setTimeToLocalStorage(value: number) {
    localStorage.setItem(LocalStorageKeys.TIME, String(value))
}
