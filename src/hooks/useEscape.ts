/* eslint-disable */
import React, { useEffect } from 'react'

/**
 * Хук, добавляющий обработчик нажатия на Escape
 * @param callback
 */
const useEscape = (callback: any): void => {
	useEffect(() => {
		const onPressEsc = ((e: React.KeyboardEvent): void => {
			if (e.key === 'Escape') callback()
		}) as any
		document.addEventListener('keydown', onPressEsc, false)
		return () => document.removeEventListener('keydown', onPressEsc, false)
	}, [])
}

export default useEscape
