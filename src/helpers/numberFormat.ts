/**
 * Форматирование числа
 * @param v входное значение
 * @param n длина дробной части
 * @param x длина целой части
 * @param s разделитель секторов
 * @param c разделитель целой и дробной части
 */
const numberFormat = (v: number, n = 0, x = 3, s = ' ', c = '.'): string => {
	const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
	const num = v.toFixed(Math.max(0, ~~n))
	return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))
}

export default numberFormat
