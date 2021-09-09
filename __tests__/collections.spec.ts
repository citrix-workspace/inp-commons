import {expect} from 'chai'
import {arrayPartition} from '../src'

type fnArgument = number[] | null | undefined

interface TestData {
	name: string,
	input: fnArgument
	atPosition: number,
	left: fnArgument
	right: fnArgument
}

describe('collections', () => {
	describe('arrayPartition', () => {

		const parameters: TestData[] = [
			{name: 'at 1', input: [1, 2], atPosition: 1, left: [1], right: [2]},
			{name: 'at 0', input: [1, 2], atPosition: 0, left: [], right: [1, 2]},
			{name: 'at 2', input: [1, 2], atPosition: 2, left: [1, 2], right: []},
			{name: 'at 100', input: [1, 2], atPosition: 100, left: [1, 2], right: []},
		]

		parameters.forEach(({name, input, atPosition, left, right}) => {
				it(name, () => {
					expect(arrayPartition(input, atPosition)[0], 'left failed').to.be.deep.equal(left)
					expect(arrayPartition(input, atPosition)[1], 'right failed').to.be.deep.equal(right)
				})
			}
		)
	})
})
