const kebabCase = (s: string): string => {
	const match: string[] | null = s.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || []
	return match.map((x) => x.toLowerCase()).join('-')
}

export default {
	kebabCase,
}
