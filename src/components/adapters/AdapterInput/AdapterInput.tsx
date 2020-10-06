/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import bem from 'bem'
import './AdapterInput.scss'
import MaskedInput from 'components/MaskedInput'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const b = bem.adapterInput()

export interface AdapterInputProps {
	[key: string]: any
	mask: 'number' | 'date' | 'phone'
}

const masks = {
	number: createNumberMask({ prefix: '', thousandsSeparatorSymbol: ' ' }),
	date: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
	phone: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
	// ...other masks
}

const AdapterInput: React.FC<AdapterInputProps> = (props) => {
	const { input, meta, disabled, mask, ...rest } = props
	const fieldProps = { disabled, ...input, ...rest }
	const Component = mask ? MaskedInput : (props: any) => <input {...props} />
	return <Component mask={masks[mask]} className={b({ disabled })} {...fieldProps} />
}

export default AdapterInput
