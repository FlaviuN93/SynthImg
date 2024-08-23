import { Menu, MenuItem, MenuToggle, MenuWindow } from '@/components/UI/Menu'
import { FolderIcon, SparklesIcon, Square2StackIcon, Squares2X2Icon } from '@heroicons/react/16/solid'
import { Metadata } from 'next'
import Image from 'next/image'
import EllipseHistory from '@/../public/EllipseHistory.svg'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
	title: 'SYNTH IMG',
	description: 'AI Image Generation',
}

export default function AuthenticatedLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<section>
			<nav className='flex justify-between tablet:flex-col tablet:gap-6'>
				<Link href={'/authenticated/dashboard'}>
					<Image src='/SynthLogo.png' alt='Synth Img' height={24} width={24} />
				</Link>
				<Menu>
					<MenuToggle />
					<MenuWindow>
						<div className='flex flex-col h-full tracking-wide font-medium'>
							<div>
								<MenuItem itemId='1'>
									{/* <Link href={'authenticated/generateImg'} className='flex gap-3'> */}
									<SparklesIcon className='h-7 w-7' />
									<span>Generate</span>
									{/* </Link> */}
								</MenuItem>
								<MenuItem itemId='2'>
									{/* <Link href={'authenticated/feed'} className='flex gap-3'> */}
									<Squares2X2Icon className='h-7 w-7' />
									<span>Feed</span>
									{/* </Link> */}
								</MenuItem>
								<MenuItem itemId='3'>
									{/* <Link href={'authenticated/history'} className='flex gap-3'> */}
									<Image src={EllipseHistory} height={26.5} width={26.5} className='p-1' alt='Ellipse' />
									<span>History</span>
									{/* </Link> */}
								</MenuItem>
								<MenuItem itemId='4'>
									{/* <Link href={'authenticated/myCollection'} className='flex gap-3'> */}
									<FolderIcon className='h-7 w-7' />
									<span>My Collection</span>
									{/* </Link> */}
								</MenuItem>
							</div>

							<MenuItem itemStyles='mt-auto mb-[60px]'>
								<ArrowLeftEndOnRectangleIcon className='h-7 w-7' />
								<span>Sign Out</span>
							</MenuItem>
						</div>
					</MenuWindow>
				</Menu>
			</nav>
			{children}
		</section>
	)
}
