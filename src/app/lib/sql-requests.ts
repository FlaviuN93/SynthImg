import { sql } from '@vercel/postgres'
import { Image } from './definitions'
import { formatDateObject } from '@/utils/functions'

export async function fetchImages() {
	try {
		const data = await sql<Image>`SELECT * FROM images`
		const modifiedData = data.rows.map((image) => ({ ...image, created_at: formatDateObject(image.created_at) }))
		return modifiedData
	} catch (error) {
		console.error('Fetch Images.Database Error:', error)
		throw new Error('Failed to fetch images data.')
	}
}
