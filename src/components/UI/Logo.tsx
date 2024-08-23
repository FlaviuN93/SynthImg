'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC<{ width?: number; height?: number }> = ({ width = 30, height = 30 }) => {
	return (
		<Link href='/' className='flex items-center gap-4'>
			<Image src='/SynthLogo.png' alt='Synth Img' height={height} width={width} />
			<h3>SynthImg</h3>
		</Link>
	)
}

export default Logo
