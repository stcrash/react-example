import diff from 'object-diff'

/**
 * Простое сравнение объектов
 * @param a
 * @param b
 */
const objectsDiff = (a: any, b: any): boolean => {
	return !!Object.keys(diff(a, b)).length
}

export default objectsDiff
