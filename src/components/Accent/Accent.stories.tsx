import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Accent, { AccentProps } from './Accent'

export default {
	title: 'Common/Accent',
	component: Accent,
} as Meta

const Template: Story<AccentProps> = (args) => <Accent {...args} />

export const Default = Template.bind({})

export const Text = Template.bind({})
Text.args = {
	children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
}
