import React, { useState } from 'react'
import bem from 'bem'
import Icon from 'components/Icon'
import Tooltip from 'components/Tooltip'
import useEscape from 'hooks/useEscape'
import './Helper.scss'

const b = bem.helper()

export interface HelperProps {
	children: string
	className?: string
}

const Helper: React.FC<HelperProps> = (props) => {
	const { children, className } = props

	const [hovered, setHovered] = useState(false)
	const [active, setActive] = useState(false)

	useEscape(() => setActive(false))

	const isVisible: boolean = hovered || active

	return (
		<div className={b({}, className)}>
			<button
				className={b('button')}
				type="button"
				onClick={() => setActive(!active)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				title="Нажмите чтобы зафиксировать подсказку"
			>
				<Icon type={!active ? 'info' : 'close'} size={20} />
			</button>
			{isVisible && <Tooltip className={b('tooltip')}>{children}</Tooltip>}
		</div>
	)
}

export default Helper
