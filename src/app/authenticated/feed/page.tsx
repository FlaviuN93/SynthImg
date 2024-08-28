import { fetchImages } from '@/app/lib/sql-requests'
import Search from '@/components/Inputs/Search'
import { searchAction } from '@/utils/actions'
import { useEffect } from 'react'

const Page = async ({ searchParams }: { searchParams?: { query?: string; page?: string } }) => {
	const query = searchParams?.query || ''
	const currentPage = Number(searchParams?.page) || 1
	const images = await fetchImages()
	console.log(query, 'queryParmas')
	return (
		<div className='m-16'>
			<Search name='image-search' placeholder='Search images by keywords' />
		</div>
	)
}

export default Page
