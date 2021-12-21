import useTranslation from 'next-translate/useTranslation'
export function strings(key: string) {
    const { t } = useTranslation('common')
    return t(key)
}