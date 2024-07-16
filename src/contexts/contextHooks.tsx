import { useContext } from 'react'
import { DropdownContext } from './DropdownContext'
import { ModalContext } from './ModalContext'

export const useDropdownContext = () => {
	const context = useContext(DropdownContext)
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
