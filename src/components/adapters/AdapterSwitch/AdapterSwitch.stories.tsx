import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import AdapterSwitch, { AdapterSwitchProps } from './AdapterSwitch'

export default {
	title: 'Common/Adapter/Switch',
	component: AdapterSwitch,
} as Meta

const Template: Story<AdapterSwitchProps> = (args) => <AdapterSwitch {...args} />

const props = {
	input: {
		type: 'checkbox',
		name: 'name',
		value: 'value',
		onChange: () => {},
	},
	negative: 'Disabled',
	positive: 'Enabled'
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
