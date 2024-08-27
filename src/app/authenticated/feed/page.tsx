import Search from '@/components/Inputs/Search'
import { searchAction } from '@/utils/actions'

const Page = () => {
	return (
		<div className='m-16'>
			<Search name='image-search' placeholder='Search images by keywords' onSearch={searchAction} />
		</div>
	)
}

export default Page
