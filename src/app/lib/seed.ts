import { db } from '@vercel/postgres'
import { users, images } from './placeholder-data'

const client = await db.connect()

async function seedUsers() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
	await client.sql`
    CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255),
    email TEXT NOT NULL UNIQUE,
    avatarURL VARCHAR(255),
    authID VARCHAR(255) NOT NULL UNIQUE,
    imageIds: TEXT[]
    )`

	const insertUsers = await Promise.all(
		users.map((user) => {
			const jsonImages = JSON.stringify(user.imageIds)
			return client.sql`
    INSERT INTO users (id, name, email, avatarURL, authID, imageIds)
    VALUES (${user.id}, ${user.name}, ${user.email}, ${user.avatarURL}, ${user.authID}, ${jsonImages})
    ON CONFLICT (authID) DO NOTHING;
    `
		})
	)
	return insertUsers
}

async function seedImages() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
	await client.sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
    image_url: VARCHAR(255) NOT NULL UNIQUE
    resolution: VARCHAR(255) NOT NULL
    promptDetails: TEXT NOT NULL
    negativePrompt: TEXT
    seed INT NOT NULL
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`

	const insertImages = await Promise.all(
		images.map(
			(image) => client.sql`
    INSERT INTO images (id, image_url, resolution, promptDetails, negativePrompt, seed)
    VALUES (${image.id}, ${image.image_URL}, ${image.resolution}, ${image.promptDetails}, ${image.negativePrompt}, ${image.seed})
    ON CONFLICT (image_url) DO NOTHING;
    `
		)
	)

	return insertImages
}

export async function GET() {
	try {
		await client.sql`BEGIN`
		await seedUsers()
		await seedImages()
		await client.sql`COMMIT`
		return Response.json({ message: 'Database seeded succesfully' })
	} catch (error) {
		await client.sql`ROLLBACK`
		return Response.json({ error }, { status: 500 })
	}
}
