import { ReactNode, useId, useRef, useEffect, useState, ChangeEvent, FC } from 'react'
import { TailwindClasses, tPositions } from '../../utils/types'
import { motion } from 'framer-motion'
import styles from './FileInput.module.css'
import Tooltip from '../UI/Tooltip'
import useMediaQuery from '../../hooks/useMediaQuery'

export interface IFileProps {
	onFileUpload: (file: File) => void
	buttonText?: string
	label?: string
	icon?: ReactNode
	fileStyles?: TailwindClasses
	error?: string
	tooltipStyles?: TailwindClasses
	tooltipPosition?: tPositions
	fileContainerStyles?: TailwindClasses
}

const FileInput: FC<IFileProps> = ({
	fileStyles = '',
	label,
	buttonText,
	icon,
	onFileUpload,
	error,
	tooltipStyles,
	tooltipPosition = 'right',

	fileContainerStyles,
}) => {
	const uniqueId = useId()
	const divRef = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState({ width: '0', height: '0' })
	const [showTooltip, setShowTooltip] = useState(false)

	useEffect(() => {
		const width = `${divRef.current?.offsetWidth}px`
		const height = `${divRef.current?.offsetHeight}px`
		setSize({
			width,
			height,
		})
	}, [size.width, size.height])

	const isMobile = useMediaQuery('(max-width:480px)')
	const fileContainerClasses = `${styles.fileContainer} ${!label ? 'flex-row' : ''} ${fileContainerStyles ? fileContainerStyles : ''}`
	const fileClasses = `${styles.fileButton} ${fileStyles ? fileStyles : ''} ${error ? styles.error : ''} relative`

	const handleSetFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			onFileUpload(event.target.files[0])
			event.target.value = ''
		}
	}

	return (
		<div className={fileContainerClasses}>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<div
				className={fileClasses}
				ref={divRef}
				role='button'
				tabIndex={0}
				onMouseOver={() => setShowTooltip(true)}
				onMouseOut={() => setShowTooltip(false)}
			>
				{icon && <span>{icon}</span>}
				<span>{buttonText}</span>

				<motion.input
					animate={size}
					className={`absolute opacity-0 w-full mobile:w-auto `}
					id={uniqueId}
					onChange={handleSetFile}
					aria-describedby={`${uniqueId}-${name}`}
					type='file'
				/>
				{error && (
					<Tooltip content={error} position={isMobile ? 'top' : tooltipPosition} tooltipStyles={tooltipStyles} hoverTooltip={showTooltip} />
				)}
			</div>
		</div>
	)
}

export default FileInput
