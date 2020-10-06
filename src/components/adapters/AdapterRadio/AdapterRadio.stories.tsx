import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import AdapterRadio, { AdapterRadioProps } from './AdapterRadio'

export default {
	title: 'Common/Adapter/Radio',
	component: AdapterRadio,
} as Meta

const Template: Story<AdapterRadioProps> = (args) => <AdapterRadio {...args}>AdapterRadio button</AdapterRadio>

const props = {
	input: {
		type: 'radio',
		name: 'name',
		value: 'value',
		onChange: () => {},
	},
}

export const Default = Template.bind({})
Default.args = props

export const Checked = Template.bind({})
Checked.args = {
	...props,
	input: {
		...props.input,
		checked: true,
	},
}

export const Disabled = Template.bind({})
Disabled.args = {
	...props,
	disabled: true,
}

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = {
	...props,
	disabled: true,
	input: {
		...props.input,
		checked: true,
	},
}
