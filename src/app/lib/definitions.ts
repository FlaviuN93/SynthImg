export type User = {
	id: string
	name: string
	email: string
	avatarURL: string
	authID: string
	imageIds: string[]
}

export type Image = {
	id: string
	image_URL: string
	promptDetails: string
	negativePrompt: string | null
	resolution: string
	seed: number
	created_at: Date
}
