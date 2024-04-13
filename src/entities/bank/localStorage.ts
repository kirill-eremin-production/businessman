import { LocalStorageKeys } from '../../shared/constants/localStorageKeys.ts'

import { BankData } from './types.ts'

export function getBankDataFromLocalStorage(): BankData | undefined {
    const savedData = localStorage.getItem(LocalStorageKeys.BANK_DATA)

    if (savedData) {
        return JSON.parse(savedData)
    }
}

export function setBankDataToLocalStorage(data: BankData) {
    localStorage.setItem(LocalStorageKeys.BANK_DATA, JSON.stringify(data))
}
