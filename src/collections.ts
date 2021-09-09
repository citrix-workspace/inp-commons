// eslint-disable-next-line no-use-before-define
export function arrayPartition<T>(array: T[] | null | undefined, atPosition: number): [T[], T[]]  {
	if (array === null || array === undefined) {
		return [[], []]
	}
	const left = array.slice(0, Math.min(atPosition, array.length))
	const right = array.slice(Math.min(atPosition, array.length), array.length)
	return [ left, right]
}
