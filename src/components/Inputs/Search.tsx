'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FC, useId, useRef, useState } from 'react'
import { TailwindClasses } from '../../utils/types'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { usePathname, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import clsx from 'clsx'

export interface SearchProps {
	name: string
	placeholder: string
	searchStyles?: TailwindClasses
}

const Search: FC<SearchProps> = ({ placeholder, searchStyles = '', name }) => {
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const inputRef = useRef<HTMLInputElement>(null)
	const pathname = usePathname()
	const { replace } = useRouter()
	const uniqueId = useId()

	const handleSearch = useDebouncedCallback((input: string) => {
		if (input) params.set('query', input)
		else params.delete('query')
		replace(`${pathname}?${params.toString()}`)
	}, 300)

	const handleClearQuery = () => {
		params.delete('query')
		if (inputRef.current) inputRef.current.value = ''
		replace(`${pathname}?${params.toString()}`)
	}

	const searchClasses = clsx(`rounded-lg peer block w-full border-2 border-darkGray outline-2 py-2.5 pl-[12px]
		 bg-black placeholder:text-gray placeholder:font-medium placeholder:text-base ${searchStyles}`)

	return (
		<div className='relative flex flex-1 flex-shrink-0'>
			<input
				name={name}
				ref={inputRef}
				className={searchClasses}
				placeholder={placeholder}
				aria-placeholder={placeholder}
				aria-describedby={`${uniqueId}-${name}`}
				defaultValue={searchParams.get('query')?.toString()}
				onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
			/>
			<span className='absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-gray peer-focus:text-gray-900'>
				{inputRef.current?.value.length === 0 ? (
					<MagnifyingGlassIcon />
				) : (
					<XMarkIcon className='h-6 w-6 cursor-pointer' onClick={handleClearQuery} />
				)}
			</span>
		</div>
	)
}

export default Search
