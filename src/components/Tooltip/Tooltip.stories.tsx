import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Tooltip, { TooltipProps } from './Tooltip'

export default {
	title: 'Common/Tooltip',
	component: Tooltip,
} as Meta

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />

const props = {
	children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
}

export const Default = Template.bind({})
Default.args = {
	...props
}
