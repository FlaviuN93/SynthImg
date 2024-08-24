'use client'

import { FC, ReactNode, useEffect } from 'react'
import styles from './Menu.module.css'
import { InlineStyles, TailwindClasses } from '../../utils/types'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useMenuContext } from '../../contexts/contextHooks'

import { MenuProvider } from '../../contexts/MenuContext'
import useKeyToClose from '../../hooks/useKeyToClose'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motionVariants, rightMenuMovement } from '@/utils/variables'

interface ToggleProps {
	icon?: ReactNode
	iconStyles?: string
	btnStyles?: TailwindClasses
}

interface MenuProps {
	children: ReactNode
	menuStyles?: TailwindClasses
	showCloseBtn?: boolean
}

interface ItemProps {
	children: ReactNode
	itemId?: string
	title?: string
	itemStyles?: InlineStyles
	closeOnClick?: boolean
}

const Menu: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<MenuProvider>
			<div className='relative w-fit min-w-10'>{children}</div>
		</MenuProvider>
	)
}

const MenuToggle: FC<ToggleProps> = ({ btnStyles = '' }) => {
	const { handleOpen, menuBtnRef, isOpen } = useMenuContext()
	const isTablet = useMediaQuery('(min-width:768px)')
	const buttonClasses = `${styles.menuToggle} ${btnStyles} ${!isOpen ? styles.menuToggleVisible : styles.menuToggleHidden}`

	return (
		<>
			{!isTablet && (
				<button ref={menuBtnRef} className={buttonClasses} onClick={handleOpen}>
					<Bars3Icon className='h-6 w-6' />
				</button>
			)}
		</>
	)
}

const MenuWindow: FC<MenuProps> = ({ children, menuStyles = '', showCloseBtn = true }) => {
	const { isOpen, handleClose, menuRef, menuBtnRef, exclusionRef } = useMenuContext()
	useKeyToClose('Escape', handleClose)
	useOutsideClick(menuRef, handleClose, { secondaryRef: menuBtnRef, exclusionRef })

	const menuClasses = `${styles.menu} ${menuStyles}`

	return (
		<motion.div initial='hidden' animate={isOpen ? 'visible' : 'hidden'} variants={motionVariants} className={styles.menuOverlay}>
			<motion.div
				initial='hidden'
				animate={isOpen ? 'visible' : 'hidden'}
				variants={rightMenuMovement}
				ref={menuRef}
				className={menuClasses}
			>
				{showCloseBtn && (
					<button onClick={handleClose} className='mb-8'>
						<XMarkIcon className='h-8 w-8' />
					</button>
				)}
				{children}
			</motion.div>
		</motion.div>
	)
}

const MenuItem: FC<ItemProps> = ({ children, itemStyles, closeOnClick = true, title }) => {
	const { handleClose } = useMenuContext()
	// const isTablet = useMediaQuery('(min-width:768px)')

	const handleClick = () => closeOnClick && handleClose()

	return (
		<div title={title} className={styles.item} style={itemStyles} onClick={handleClick}>
			{children}
		</div>
	)
}

const Divider: FC<{ dividerStyles?: TailwindClasses }> = ({ dividerStyles = '' }) => {
	const dividerClasses = `${styles.divider} ${dividerStyles}`
	return <hr className={dividerClasses} />
}

export { Menu, MenuWindow, MenuToggle, MenuItem, Divider }
