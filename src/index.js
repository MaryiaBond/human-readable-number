module.exports = function toReadable(number) {
    strN = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
    }
    if (number < 21) {
        return strN[number]
    } else {
        if (number < 100) {
            let n = Math.trunc(number / 10)
            if (number % 10 === 0) {
                return strN[number]
            }
            return strN[n * 10] + ' ' + strN[number % 10]
        } else {
            if (number < 1000) {
                if (number % 100 === 0) {
                    return strN[number / 100] + ' hundred'
                }
                if ((number % 10) === 0) {
                    return strN[Math.trunc(number / 100)] + ' hundred ' + strN[number % 100]
                }
                if((number % 100) < 20) {
                    return strN[Math.trunc(number / 100)] + ' hundred ' + strN[number % 100]
                }
                let x = Math.trunc((number % 100)/10)*10
                return strN[Math.trunc(number / 100)] + ' hundred ' + strN[x] + ' ' + strN[(number % 10)]

            }
        }
    }
}
