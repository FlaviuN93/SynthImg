'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Menu, MenuItem, MenuToggle, MenuWindow } from './Menu'
import EllipseHistory from '@/../public/EllipseHistory.svg'
import { Sidebar, SidebarItem } from './Sidebar'
import { ArrowLeftEndOnRectangleIcon, FolderIcon, SparklesIcon, Squares2X2Icon } from '@heroicons/react/16/solid'
import Avatar from './Avatar'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthNavigation() {
	const isTablet = useMediaQuery('(min-width:768px)')
	return (
		<nav className='flex justify-between items-center tablet:items-start px-6 py-4 tablet:p-2'>
			{isTablet ? (
				<Sidebar>
					<SidebarItem title='Dashboard' itemStyles={{ marginBottom: '3rem' }}>
						<Link href={'/dashboard'}>
							<Image src='/SynthLogo.png' alt='Synth Img' height={24} width={24} />
						</Link>
					</SidebarItem>
					<SidebarItem itemId='1' title='Generate Image'>
						<Link href={'generateImg'} className='flex gap-3'>
							<SparklesIcon className='h-7 w-7' />
						</Link>
					</SidebarItem>
					<SidebarItem itemId='2' title='Feed'>
						<Link href={'feed'} className='flex gap-3'>
							<Squares2X2Icon className='h-7 w-7' />
						</Link>
					</SidebarItem>
					<SidebarItem itemId='3' title='History'>
						<Link href={'history'} className='flex gap-3'>
							<Image src={EllipseHistory} height={26.5} width={26.5} className='p-1' alt='Ellipse' />
						</Link>
					</SidebarItem>
					<SidebarItem itemId='4' title='My Collection'>
						<Link href={'myCollection'} className='flex gap-3'>
							<FolderIcon className='h-7 w-7' />
						</Link>
					</SidebarItem>

					<div className='mt-auto flex flex-col items-center'>
						<SidebarItem title='Avatar'>
							<Avatar avatarStyles='h-8 w-8' />
						</SidebarItem>
						<SidebarItem itemId='5' title='Sign Out'>
							<ArrowLeftEndOnRectangleIcon className='h-7 w-7' />
						</SidebarItem>
					</div>
				</Sidebar>
			) : (
				<>
					<Link href={'/dashboard'}>
						<Image src='/SynthLogo.png' alt='Synth Img' height={24} width={24} />
					</Link>
					<Menu>
						<MenuToggle />
						<MenuWindow menuStyles='flex flex-col h-full tracking-wide font-medium'>
							<div>
								<MenuItem itemId='1'>
									<Link href={'generateImg'} className='flex gap-3'>
										<SparklesIcon className='h-7 w-7' />
										<span>Generate</span>
									</Link>
								</MenuItem>
								<MenuItem itemId='2'>
									<Link href={'feed'} className='flex gap-3'>
										<Squares2X2Icon className='h-7 w-7' />
										<span>Feed</span>
									</Link>
								</MenuItem>
								<MenuItem itemId='3'>
									<Link href={'history'} className='flex gap-3'>
										<Image src={EllipseHistory} height={26.5} width={26.5} className='p-1' alt='Ellipse' />
										<span>History</span>
									</Link>
								</MenuItem>
								<MenuItem itemId='4'>
									<Link href={'myCollection'} className='flex gap-3'>
										<FolderIcon className='h-7 w-7' />
										<span>My Collection</span>
									</Link>
								</MenuItem>
							</div>

							<MenuItem itemStyles={{ marginTop: 'auto', marginBottom: '-1rem' }}>
								<ArrowLeftEndOnRectangleIcon className='h-7 w-7' />
								<span>Sign Out</span>
							</MenuItem>
						</MenuWindow>
					</Menu>
				</>
			)}
		</nav>
	)
}
