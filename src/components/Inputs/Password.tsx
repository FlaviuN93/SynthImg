import { FC, useState } from 'react'
import { TailwindClasses } from '../../utils/types'
import styles from './Password.module.css'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import Tooltip from '../UI/Tooltip'
import useMediaQuery from '../../hooks/useMediaQuery'

export interface PasswordProps {
	placeholder: string
	disabled?: boolean
	label?: string
	onChange?: (value: string) => void
	showPasswordBtn?: boolean
	tooltipStyles?: TailwindClasses
	passwordStyles?: TailwindClasses
	error?: string | boolean
}

const Password: FC<PasswordProps> = ({
	disabled = false,
	placeholder,
	tooltipStyles = '',
	passwordStyles = '',
	label,
	onChange,
	showPasswordBtn = false,
	error,
}) => {
	const [showPassword, setShowPassword] = useState(false)
	const [showTooltip, setShowTooltip] = useState(false)
	const isLaptop = useMediaQuery('(min-width:1024px)')

	const handleTogglePassword = () => setShowPassword((prevState) => !prevState)
	const passwordClasses = `${styles.password} ${passwordStyles} ${error ? styles.error : ''}`

	return (
		<div>
			<label className={styles.label} htmlFor={label} aria-label={label}>
				{label}
			</label>

			<div className='relative mt-1.5' onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
				<input
					className={passwordClasses}
					id={label}
					onChange={(event) => onChange?.(event.target.value)}
					placeholder={placeholder}
					autoComplete='on'
					aria-placeholder={placeholder}
					type={showPassword ? 'text' : 'password'}
					disabled={disabled}
					aria-disabled={disabled ? 'true' : 'false'}
				/>

				{showPasswordBtn && (
					<button className={styles.passwordIcon} type='button' onClick={handleTogglePassword}>
						{showPassword ? <EyeIcon className='h-6 w-6' /> : <EyeSlashIcon className='h-6 w-6' />}
					</button>
				)}

				{error && typeof error === 'string' && (
					<Tooltip position={isLaptop ? 'right' : 'bottom'} hoverTooltip={showTooltip} content={error} tooltipStyles={tooltipStyles} />
				)}
			</div>
		</div>
	)
}

export default Password
