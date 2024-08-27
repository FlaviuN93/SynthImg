import { Image, User } from './definitions'

export const users: User[] = [
	{
		id: '410544b2-4001-4271-9855-fec4b6a6442a',
		name: 'Flaviu',
		email: 'flaviu.test@gmail.com',
		avatarURL: 'http://dfsfdsfijvdosvds-fdsfs.com',
		authID: 'authId123',
		imageIds: [
			'410544b2-4001-4271-9855-fec4b6a6442',
			'410544b2-4001-4271-9855-fec4b6a6',
			'410544b2-4001-4271-9855-fe2a',
			'410544b2-4001-4271-fec4b6a6442a',
		],
	},
	{
		id: '410544b2-42211-4271-9855-fec4b6a6442a',
		name: 'Maria',
		email: 'maria.test@gmail.com',
		avatarURL: 'http://dfssfdjvdosvds-fdsfs.com',
		authID: 'authId145',
		imageIds: [
			'410544b2-4001-4276-9855-fec4b6a6442',
			'410544b2-4001-4277-9855-fec4b6a6',
			'410544b2-4001-4278-9855-fe2a',
			'410544b2-4001-4279-fec4b6a6442a',
		],
	},
]

export const images: Image[] = [
	{
		id: '410544b2-4001-4271-9855-fec4b6a6442rt',
		resolution: '1024x1024 (1:1)',
		promptDetails: 'Prompt details',
		negativePrompt: 'Negative details',
		seed: 4324324,
		image_URL: 'http://dfsdfsdfdsfdsff-dfdsf.com',
	},
	{
		id: '410544b2-4001-4271-9855-fec4b6a64fdsfsdf42rt',
		resolution: '2048:2048 (1:1)',
		promptDetails: 'Prompt details123',
		negativePrompt: 'Negative details123',
		seed: 432432324,
		image_URL: 'http://dfsdfsdfddsadassfdsff-dfdsf.com',
	},
	{
		id: '410544b2-4001-4271-9855-fec4b6a6442dffrt',
		resolution: '800x600 (1.5:1)',
		promptDetails: 'Prompt details234',
		negativePrompt: 'Negative details234',
		seed: 43243424,
		image_URL: 'http://dfsdfsasdadsdfdsfdsff-dfdsf.com',
	},
]
