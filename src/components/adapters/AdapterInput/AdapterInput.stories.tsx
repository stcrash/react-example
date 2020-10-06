import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import AdapterInput, { AdapterInputProps } from './AdapterInput'

export default {
	title: 'Common/Adapter/Input',
	component: AdapterInput,
} as Meta

const Template: Story<AdapterInputProps> = (args) => <AdapterInput {...args} />

const props = {
	input: {
		type: 'text',
		name: 'name',
		onChange: () => {},
	},
}

export const Default = Template.bind({})
Default.args = props

export const Value = Template.bind({})
Value.args = {
	...props,
	input: {
		...props.input,
		value: 'Input value'
	},
}

export const Disabled = Template.bind({})
Disabled.args = {
	...props,
	disabled: true,
}

export const MaskNumber = Template.bind({})
MaskNumber.args = {
	...props,
	mask: 'number'
}

export const MaskDate = Template.bind({})
MaskDate.args = {
	...props,
	mask: 'date'
}

export const MaskPhone = Template.bind({})
MaskPhone.args = {
	...props,
	mask: 'phone'
}

