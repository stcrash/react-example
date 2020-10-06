/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import bem from 'bem'
import './AdapterSwitch.scss'

const b = bem.adapterSwitch()

export interface AdapterSwitchProps {
	[key: string]: any
}

const AdapterSwitch: React.FC<AdapterSwitchProps> = (props) => {
	const { input, meta, disabled, negative, positive, ...rest } = props
	const { checked } = input
	const fieldProps = { disabled, ...input, ...rest }
	return (
		<span className={b({ disabled })}>
			<label className={b('label')}>
				<input className={b('field')} {...fieldProps} />
				<span className={b('negative', { active: !checked })}>{negative}</span>
				<span className={b('toggle', { checked })} />
				<span className={b('positive', { active: checked })}>{positive}</span>
			</label>
		</span>
	)
}

export default AdapterSwitch
