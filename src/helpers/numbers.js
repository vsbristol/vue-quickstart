/**
 * Abbreviate Numbers
 * 1000 = 1K
 * 10000 = 10K
 * 1000000 = 1M
 *
 * @param value
 * @returns {string}
 */
export const abbrNumber = (value) => {

    function abbreviate_number(num, fixed) {

        if (num === null) {
            return null;
        }
        if (num === 0) {
            return '0';
        }

        fixed = (!fixed || fixed < 0) ? 0 : fixed;
        let b = (num).toPrecision(2).split("e"),
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
            c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', 'K', 'M', 'B', 'T'][k];

        return e;
    }

    return abbreviate_number(parseInt(value),0)
}