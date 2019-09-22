export const isNotEmpty = (input: String, message: string = 'Required'): string | undefined =>
	!input ? message : undefined
