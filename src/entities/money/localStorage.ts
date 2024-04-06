import { LocalStorageKeys } from '../../shared/constants/localStorageKeys.ts'

export function getMoneyFromLocalStorage(): number {
    return Number(localStorage.getItem(LocalStorageKeys.MONEY)) || 0
}

export function setMoneyToLocalStorage(value: number) {
    localStorage.setItem(LocalStorageKeys.MONEY, String(value))
}
