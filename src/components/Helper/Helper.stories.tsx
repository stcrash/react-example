import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Helper, { HelperProps } from './Helper'

export default {
	title: 'Common/Helper',
	component: Helper,
} as Meta

const Template: Story<HelperProps> = (args) => <Helper {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
}
