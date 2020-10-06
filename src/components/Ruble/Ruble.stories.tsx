import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Ruble, { RubleProps } from './Ruble'

export default {
	title: 'Common/Ruble',
	component: Ruble,
} as Meta

const Template: Story<RubleProps> = (args) => (
	<div style={{ fontSize: 30 }}>
		<Ruble {...args} />
	</div>
)

export const Default = Template.bind({})

export const Value = Template.bind({})
Value.args = {
	value: 1200.25,
}

export const Fixed = Template.bind({})
Fixed.args = {
	value: 1200.25,
	toFixed: 2,
}
