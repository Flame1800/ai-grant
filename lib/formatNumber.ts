interface FormatNumberOptions {
    decimals?: number
    decimalPlaces?: number
    separator?: string
    minDigits?: number
    disableUnit?: boolean
}

export function formatNumber(num: number, options: FormatNumberOptions = {}): string {
    // console.log('formatNumber', num, options)
    let { decimals = 10, decimalPlaces = 4, separator, minDigits = 1, disableUnit = false } = options
    if (num === undefined || num === null) return ''

    const op = num < 0 ? '-' : ''
    num = Math.abs(num)

    if (num > 1 && !options.decimalPlaces) decimalPlaces = 2

    if (num < 0.001 && num > 0) {
        return '< 0.001'
    }

    let unit = ''
    let factor = 1

    if (!separator && !disableUnit) {
        if (num >= 1e9) {
            unit = 'b'
            factor = 1e9
        } else if (num >= 1e6) {
            unit = 'м'
            factor = 1e6
        } else if (num >= 1e3) {
            unit = 'к'
            factor = 1e3
        }
    }

    if (disableUnit && decimals) {
        factor = 10 ** decimals
    }

    let formattedNumber = num / factor
    const roundingFactor = 10 ** decimals
    formattedNumber = Math.round(formattedNumber * roundingFactor) / roundingFactor

    let [intPart, decPart] = formattedNumber.toFixed(decimalPlaces ?? decimals).split('.')

    if (separator && !unit) {
        const regex = /\B(?=(\d{3})+(?!\d))/g
        intPart = intPart.replace(regex, separator)
    }

    if (decPart && minDigits > 0) {
        while (decPart.length < minDigits) {
            decPart += '0'
        }
    }

    let result = `${op}${intPart}${decPart ? '.' : ''}${decPart || ''}`

    if (unit) {
        result += `${unit}`
    }

    return result
}
