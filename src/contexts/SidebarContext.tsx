import { FC, ReactNode, createContext, useRef, useState } from 'react'

interface SidebarContextProps {
	selectedItemId: string | null
	handleSelect: (itemId: string) => void
}

export const SidebarContext = createContext({} as SidebarContextProps)

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
	const handleSelect = (itemId: string) => setSelectedItemId(itemId)

	return (
		<SidebarContext.Provider
			value={{
				selectedItemId,
				handleSelect,
			}}
		>
			{children}
		</SidebarContext.Provider>
	)
}
