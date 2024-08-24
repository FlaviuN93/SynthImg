import { useState, useEffect } from 'react'

const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(true)

	const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches)

	useEffect(() => {
		if (typeof window === 'undefined') return
		const matchQueryList = window.matchMedia(query)

		matchQueryList.addEventListener('change', handleChange)
		setMatches(matchQueryList.matches)
		return () => matchQueryList.removeEventListener('change', handleChange)
	}, [query])

	return matches
}

export default useMediaQuery
