'use client'

import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	return (
		<section className='flex flex-col min-h-screen justify-between'>
			<div className='my-10 mx-8'>
				<Logo />
			</div>
			<div className='flex-1 flex flex-col gap-10 tablet:flex-row mx-8'>
				<div className='flex flex-col self-start tablet:self-center desktop:self-start gap-6 w-full'>
					<h1 className='text-4xl mobile:text-5xl laptop:text-6xl '>Create Stunning Images Transform Your Ideas into Art Instantly</h1>
					<p className='text-lg tablet:text-xl text-gray'>
						Unleash your creativity with our cutting-edge AI. Enter a prompt, and watch as our advanced algorithms generate beautiful,
						high-quality images tailored to your description.
					</p>

					<div className='flex flex-col gap-4 lgMobile:flex-row mt-4'>
						<Button
							icon={<SparklesIcon className='h-6 w-6' />}
							buttonStyles='bg-violet py-3 w-full desktop:w-auto desktop:px-16'
							buttonText='Search Images'
						/>
						<Button
							icon={<UserCircleIcon className='h-6 w-6' />}
							buttonStyles='bg-darkGray py-3 w-full desktop:w-auto desktop:px-24'
							buttonText='Sign In'
							onClick={() => router.push('/signIn')}
						/>
					</div>
				</div>

				<div className='min-h-[520px] tablet:w-full relative'>
					<Image
						src='/homeImage2.png'
						alt='Home Image'
						fill
						quality={100}
						className='object-cover tablet:object-contain desktop:object-cover rounded-3xl'
					/>
				</div>
			</div>

			<footer className='footer'>
				<p className='order-2 tablet:order-1'>Copyright © SynthIMG. All rights reserved</p>
				<ul className='order-1 tablet:order-2 flex gap-4 tablet:gap-8 desktop:gap-12'>
					<Link href={'/info/termsOfService'} className='focus:underline focus:outline-none'>
						<li>Terms Of Service</li>
					</Link>
					<Link href={'/info/privacyPolicy'} className='focus:underline focus:outline-none'>
						<li>Privacy Policy</li>
					</Link>
					<Link href={'/info/contactUs'} className='focus:underline focus:outline-none'>
						<li>Contact Us</li>
					</Link>
				</ul>
			</footer>
		</section>
	)
}
