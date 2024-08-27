import { ObjectType } from './types'

interface IUpdateStorage {
	storageKey: string
	objectKey: string
	valueToUpdate: any
}

export const getValueFromStorage = <T>(key: string, initialValue: T) => {
	if (typeof window.localStorage === 'undefined') console.log('localStorage is not supported')
	const item = window.localStorage.getItem(key)
	if (!item) return initialValue

	const data: T = item.startsWith('{') ? JSON.parse(item) : item

	return data
}

export const updateObjectFromStorage = (updateStorage: IUpdateStorage): void => {
	if (typeof window.localStorage === 'undefined') console.log('localStorage is not supported')
	const currentItem = window.localStorage.getItem(updateStorage.storageKey)
	if (!currentItem) throw Error('Item from local storage does not exist')

	const convertedItem = currentItem.startsWith('{') ? JSON.parse(currentItem) : null
	if (convertedItem === null) throw Error('Item from local storage is not an object')

	convertedItem[updateStorage.objectKey] = updateStorage.valueToUpdate
	window.localStorage.setItem(updateStorage.storageKey, JSON.stringify(convertedItem))
}

export const allValuesValid = (data: ObjectType): boolean => {
	for (const value of Object.values(data)) {
		if (typeof value === 'string' && value.trim().length === 0) return false
		if (typeof value === 'undefined' || value === null) return false
		if (Array.isArray(value) && value.length === 0) return false
		if (typeof value === 'number' && value < 0) return false
	}
	return true
}

export const formatDateObject = (timestamp: Date) =>
	timestamp.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
