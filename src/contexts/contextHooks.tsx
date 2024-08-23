import { useContext } from 'react'
import { MenuContext } from './MenuContext'
import { ModalContext } from './ModalContext'

export const useMenuContext = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error('Dropdown context must be used within a DropdownProvider')
	}
	return context
}

export const useModalContext = () => {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error('Modal context must be used within a ModalProvider')
	}

	return context
}
