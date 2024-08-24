'use client'

import { InlineStyles, TailwindClasses } from '@/utils/types'
import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { useSidebarContext } from '@/contexts/contextHooks'

interface ISidebarProps {
	children: ReactNode
	sidebarStyles?: TailwindClasses
}

interface ISidebarItemProps {
	children: ReactNode
	itemId?: string
	title?: string
	itemStyles?: InlineStyles
}

const Sidebar: FC<ISidebarProps> = ({ children, sidebarStyles }) => {
	const sidebarClasses = `${styles.sidebarMenu} ${sidebarStyles}`

	return (
		<SidebarProvider>
			<div className={sidebarClasses}>{children}</div>
		</SidebarProvider>
	)
}

const SidebarItem: FC<ISidebarItemProps> = ({ children, itemId, itemStyles, title }) => {
	const { handleSelect, selectedItemId } = useSidebarContext()
	const sidebarItemClasses = `${styles.sidebarItem} ${selectedItemId === itemId ? styles.activeItem : ''}`

	const handleClick = () => itemId && handleSelect(itemId)

	return (
		<div key={itemId} className={sidebarItemClasses} onClick={handleClick} style={itemStyles} title={title}>
			{children}
		</div>
	)
}

export { Sidebar, SidebarItem }
