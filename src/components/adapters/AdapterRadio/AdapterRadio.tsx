/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import bem from 'bem'
import './AdapterRadio.scss'

const b = bem.adapterRadio()

export interface AdapterRadioProps {
	[key: string]: any
}

const AdapterRadio: React.FC<AdapterRadioProps> = (props) => {
	const { input, meta, disabled, children, ...rest } = props
	const { checked = false } = input
	const fieldProps = { disabled, ...input, ...rest }
	return (
		<span className={b({ disabled })}>
			<label className={b('label')}>
				<input className={b('field')} {...fieldProps} />
				<span className={b('icon', { checked })} />
				{children}
			</label>
		</span>
	)
}

export default AdapterRadio
