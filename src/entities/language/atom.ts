import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

import { TEXT } from '../../shared/constants/text.ts'

export type Language = 'ru' | 'en'

const language = atom<Language>('ru')

export const useLanguage = () => {
    const [lang, setLang] = useAtom(language)

    return { lang, setLang }
}

export const useTranslate = () => {
    const { lang } = useLanguage()

    return useCallback(
        (key: keyof typeof TEXT) => {
            return TEXT[key][lang]
        },
        [lang]
    )
}
