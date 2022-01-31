export interface LibBuffer {
 Buffer: BufferConstructor
}

interface LibUuid {
	v4: () => string
}

export type LibraryReturn = LibBuffer | LibUuid | any

export type LoadLibrary = (name: 'buffer' | 'uuid') => LibraryReturn

export interface Library {
	load: LoadLibrary
}

export {}

declare global {
	let library: Library
}

export interface Client {
	fetch(url: string, requestInit?: RequestInit): Promise<Response>
	fetchSync(url: string, requestInit?: RequestInit): Response
}

export interface Parameters { [key: string]: any }

export interface FunctionArgs { client: Client, parameters: Parameters }

export interface Dictionary { [key: string]: any }
