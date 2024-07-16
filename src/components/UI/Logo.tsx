import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/' className='flex items-center gap-4'>
			<Image src='/SynthLogo.png' alt='Synth Img' height={30} width={30} />
			<h3>SynthIMG</h3>
		</Link>
	)
}

export default Logo
