import AuthNavigation from '@/components/UI/AuthNavigation'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'SYNTH IMG',
	description: 'AI Image Generation',
}

export default function AuthenticatedLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<section className='flex flex-col gap-12 tablet:gap-16 tablet:flex-row'>
			<div className='w-full tablet:w-[70px]'>
				<AuthNavigation />
			</div>
			{children}
		</section>
	)
}
