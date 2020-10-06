import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Icon, { IconProps } from './Icon'

export default {
	title: 'Common/Icon',
	component: Icon,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta

const Template: Story<IconProps> = (args) => (
	<div style={{ width: 200 }}>
		<Icon {...args} />
	</div>
)

export const Default = Template.bind({})
Default.args = {
	type: 'info',
}

export const Colored = Template.bind({})
Colored.args = {
	type: 'info',
	color: 'red',
}

export const Loading = Template.bind({})
Loading.args = {
	type: 'loading',
	loading: true,
}

export const Sized = Template.bind({})
Sized.args = {
	type: 'info',
	size: 50,
}
