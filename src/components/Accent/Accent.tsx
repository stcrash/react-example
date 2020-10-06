import React from 'react'
import bem from 'bem'
import './Accent.scss'

const b = bem.accent()

export interface AccentProps {
	children: any
}

const Accent: React.FC<AccentProps> = (props) => {
	const { children } = props
	if (!children) return null
	return <div className={b()}>{children}</div>
}

export default Accent
