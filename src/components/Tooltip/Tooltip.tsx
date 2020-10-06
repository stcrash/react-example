import React from 'react'
import bem from 'bem'
import './Tooltip.scss'

const b = bem.tooltip()

export interface TooltipProps {
	children: string
	className?: string
}

const Tooltip: React.FC<TooltipProps> = (props) => {
	const { children, className } = props;
	return (
		<div className={b({}, className)}>
			<div className={b('cloud')}>{children}</div>
		</div>
	)
}

export default Tooltip
