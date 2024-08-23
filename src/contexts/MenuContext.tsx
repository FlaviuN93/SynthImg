import { FC, ReactNode, RefObject, createContext, useRef, useState } from 'react'

interface MenuContextProps {
	isOpen: boolean
	handleClose: () => void
	handleOpen: () => void
	menuBtnRef: RefObject<HTMLButtonElement>
	menuRef: RefObject<HTMLDivElement>
	exclusionRef: RefObject<HTMLDivElement>
	selectedItemId: string | null
	handleSelect: (itemId: string) => void
}

export const MenuContext = createContext({} as MenuContextProps)

export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true)
	const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuBtnRef = useRef<HTMLButtonElement>(null)
	const exclusionRef = useRef<HTMLDivElement>(null)

	const handleSelect = (itemId: string) => setSelectedItemId(itemId)

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
				selectedItemId,
				handleSelect,
				exclusionRef,
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}
