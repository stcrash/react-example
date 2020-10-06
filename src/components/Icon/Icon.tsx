import React, { memo } from 'react'
import bem from 'bem'
import loadable from '@loadable/component'
import objectsDiff from 'helpers/objectsDiff'
import './Icon.scss'

const b = bem.icon()

type IconTypes = 'close' | 'home' | 'info' | 'loading'

export interface IconProps {
	[key: string]: any
	type: IconTypes
	size?: number
	color?: string
	className?: string
	loading?: boolean
}

const Icon: React.FC<IconProps> = (props) => {
	const { type, size, color, className, loading, ...rest } = props
	const Svg = loadable(() => import(`./img/${type}.svg`))
	if (!Svg) return null
	return (
		<i
			className={b({ loading }, className)}
			style={{
				...(size && { width: size, height: size }),
				...(color && { color }),
			}}
			{...rest}
		>
			<Svg />
		</i>
	)
}

// Мемоизация необходима для предотвращения бесконечного обновления компонента
// при использовании loadable внутри
export default memo(Icon, (prevProps, nextProps) => !objectsDiff(prevProps, nextProps))
