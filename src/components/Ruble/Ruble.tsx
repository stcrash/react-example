import React from 'react'
import bem from 'bem'
import './Ruble.scss'
import numberFormat from 'helpers/numberFormat'

const b = bem.ruble()

export interface RubleProps {
	value?: number
	toFixed?: number
}

const Ruble: React.FC<RubleProps> = ({ value, toFixed }) => {
	return (
		<>
			{value && numberFormat(value, toFixed)}
			<span className={b()}>Р</span>
		</>
	)
}

export default Ruble
