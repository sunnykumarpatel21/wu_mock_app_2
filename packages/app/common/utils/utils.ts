import useTranslation from "next-translate/useTranslation";

export function strings(key: string) {
    const { t } = useTranslation("common");
    return t(key);
}

/**
 * Filter Array 🧹
 * ----
 * a common function that removes deplicate items from an array
 * ----
 * @param {arr} an array
 * @returns an array w/o duplicates
 * @note will not work for arrays with objects
 */
export const filterArray = (arr: unknown[]): unknown[] =>
    arr.filter((item: unknown, index: number, self: unknown[]) => self.indexOf(item) === index)


/**
 * head 👤
 * ----
 * A common utility returning the first item in an array
 * ----
 * @param {array}
 * @returns {item} returns the first item of an array
 */
export const head = ([first]: unknown[]): unknown => first

export const isArray = (item: unknown): boolean => Array.isArray(item)

export const isOfObjectType = (item: unknown): boolean => item !== null && typeof item === 'object'

export const isObject = (item: unknown): boolean => isOfObjectType(item) && !isArray(item)

/**
* stringInterpolation 🧵
* ---
* a common utility for interpolating variables in strings
* ---
* @param str a string
* @param arr an array of objects
*/

export type KeyValueStringsObject = {
    [key: string]: string
}

export const stringInterpolation = (str: string, arr: KeyValueStringsObject[]): string =>
    str && arr
        ? arr.reduce((generatedStr: string, item: KeyValueStringsObject) => {
            const dynamicKey: string = Object.keys(item).toString()
            return generatedStr.replace(`#{${dynamicKey}}`, item[dynamicKey])
        }, str)
        : str

export const removeWhitespaceFromString = (string: string): string =>
    string
        .trim()
        .split('  ')
        .map((word: string): string => word.trim())
        .filter((word: string): boolean => word !== '')
        .join(' ')