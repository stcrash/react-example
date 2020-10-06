import block from 'bem-cn-lite'
import lodash from 'helpers/lodash'

/**
 * Использование:
 * import bem from './bem'
 * const b = bem.layout()
 * <div className={b()}>
 *     <button className={b('button', { active: true }, 'mixed')}>button</button>
 * </div>
 */

// Уникальные названия классов
const classes = {
	accent: null,
	ruble: null,
	icon: null,
	tooltip: null,
	helper: null,
	adapterInput: null,
	adapterRadio: null,
	adapterSwitch: null,
	formContact: null,
}

/**
 * Объект для использования bem-стилей в проекте
 * Ключи - названия классов
 * Значения - функция bem-cn
 * @param classes
 */
// eslint-disable-next-line
const init = (classes: { [key: string]: null }): { [key: string]: any } => {
	return Object.keys(classes).reduce((list, name) => {
		return { ...list, [name]: () => block(lodash.kebabCase(name)) }
	}, {})
}

export default init(classes)
