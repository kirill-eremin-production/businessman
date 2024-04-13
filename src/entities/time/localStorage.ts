import { LocalStorageKeys } from '../../shared/constants/localStorageKeys.ts'

import { INITIAL_TIME } from './constants.ts'

export function getTimeFromLocalStorage(): number {
    return Number(localStorage.getItem(LocalStorageKeys.TIME)) || INITIAL_TIME
}

export function setTimeToLocalStorage(value: number) {
    localStorage.setItem(LocalStorageKeys.TIME, String(value))
}
