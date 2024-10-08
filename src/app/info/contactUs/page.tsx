import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Us',
}

const Page = () => {
	return (
		<div className='px-4 mx-auto flex flex-col gap-6 max-w-[600px] text-light min-w-[320px] justify-center h-screen leading-relaxed '>
			<h1 className='text-center'>Contact Us</h1>

			<article>
				<h2>Get in Touch</h2>
				<h5>We`d love to hear from you! Here is how to get in touch:</h5>
			</article>

			<article>
				<h2>What can we help you with?</h2>
				<ul className='flex flex-col gap-1'>
					<li>General inquiries</li>
					<li>Feedback</li>
					<li>Technical support</li>
					<li>Partnership opportunities</li>
				</ul>
			</article>
		</div>
	)
}

export default Page
