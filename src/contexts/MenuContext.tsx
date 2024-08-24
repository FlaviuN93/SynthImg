import { FC, ReactNode, RefObject, createContext, useRef, useState } from 'react'

interface MenuContextProps {
	isOpen: boolean
	handleClose: () => void
	handleOpen: () => void
	menuBtnRef: RefObject<HTMLButtonElement>
	menuRef: RefObject<HTMLDivElement>
	exclusionRef: RefObject<HTMLDivElement>
}

export const MenuContext = createContext({} as MenuContextProps)

export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuBtnRef = useRef<HTMLButtonElement>(null)
	const exclusionRef = useRef<HTMLDivElement>(null)

	const handleClose = () => setIsOpen(false)

	const handleOpen = () => setIsOpen(true)

	return (
		<MenuContext.Provider
			value={{
				isOpen,
				handleClose,
				handleOpen,
				menuRef,
				menuBtnRef,
				exclusionRef,
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}
