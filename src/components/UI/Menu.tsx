'use client'

import { FC, ReactNode, useEffect } from 'react'
import { TailwindClasses } from '../../utils/types'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import styles from './Menu.module.css'
import { useMenuContext } from '../../contexts/contextHooks'

import { MenuProvider } from '../../contexts/MenuContext'
import useKeyToClose from '../../hooks/useKeyToClose'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import useMediaQuery from '@/hooks/useMediaQuery'

interface ToggleProps {
	icon?: ReactNode
	iconStyles?: string
	btnStyles?: TailwindClasses
}

interface MenuProps {
	children: ReactNode
	menuStyles?: TailwindClasses
}

interface ItemProps {
	children: ReactNode
	itemId?: string
	itemStyles?: TailwindClasses
	closeOnClick?: boolean
}

const Menu: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<MenuProvider>
			<div className='relative w-fit min-w-10'>{children}</div>
		</MenuProvider>
	)
}

const MenuWindow: FC<MenuProps> = ({ children, menuStyles = '' }) => {
	const { isOpen, handleClose, menuRef, menuBtnRef, exclusionRef } = useMenuContext()
	// const isTablet = useMediaQuery('(min-width:768px)')
	useKeyToClose('Escape', handleClose)
	useOutsideClick(menuRef, handleClose, { secondaryRef: menuBtnRef, exclusionRef })

	const menuClasses = `${styles.menu} ${isOpen ? styles.activeMenu : ''} ${menuStyles}`

	useEffect(() => {
		console.log(isOpen)
	}, [isOpen])

	return (
		<div className={styles.menuOverlay}>
			<div ref={menuRef} className={menuClasses}>
				{isOpen && (
					<button onClick={handleClose} className='mb-8'>
						<XMarkIcon className='h-8 w-8' />
					</button>
				)}
				{children}
			</div>
		</div>
	)
}

const MenuToggle: FC<ToggleProps> = ({ btnStyles = '' }) => {
	const { handleOpen, menuBtnRef, isOpen } = useMenuContext()
	const isTablet = useMediaQuery('(min-width:768px)')
	const buttonClasses = `${styles.menuToggle} ${btnStyles}`

	useEffect(() => {
		console.log(isOpen)
	}, [isOpen])
	return (
		<>
			{!isOpen && !isTablet && (
				<button ref={menuBtnRef} className={buttonClasses} onClick={handleOpen}>
					<Bars3Icon className='h-6 w-6' />
				</button>
			)}
		</>
	)
}

const MenuItem: FC<ItemProps> = ({ children, itemStyles = '', itemId, closeOnClick = true }) => {
	const { selectedItemId, handleSelect, handleClose } = useMenuContext()
	const itemClasses = `${styles.item} ${selectedItemId === itemId ? styles.activeItem : ''}  ${itemStyles}`

	const handleClick = () => {
		if (itemId) handleSelect(itemId)
		if (closeOnClick) handleClose()
	}

	return (
		<div className={itemClasses} style={itemStyles} onClick={handleClick}>
			{children}
		</div>
	)
}

const Divider: FC<{ dividerStyles?: TailwindClasses }> = ({ dividerStyles = '' }) => {
	const dividerClasses = `${styles.divider} ${dividerStyles}`
	return <hr className={dividerClasses} />
}

export { Menu, MenuWindow, MenuToggle, MenuItem, Divider }
