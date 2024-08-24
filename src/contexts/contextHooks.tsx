import { useContext } from 'react'
import { MenuContext } from './MenuContext'
import { ModalContext } from './ModalContext'
import { SidebarContext } from './SidebarContext'

export const useMenuContext = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error('Menu context must be used within a MenuProvider')
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

export const useSidebarContext = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error('Sidebar context must be used within a SidebarProvider')
	}
	return context
}
