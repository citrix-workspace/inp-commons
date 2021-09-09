import {expect} from 'chai'

import {decodeContent, encodeContent} from '../src'

function swapEntry([key, value]) {
	return ([value, key])
}

const testFixture = [
    ['Hello world!', 'SGVsbG8gd29ybGQh'],
    ['Vojtěch Šobáň', 'Vm9qdMSbY2ggxaBvYsOhxYg='],
    ['トヨタ自動車', '44OI44Oo44K/6Ieq5YuV6LuK']
]

describe('encoding-utils', () => {
    describe('encodeContent', () => {
        testFixture.forEach(([input, expected]) => {
            it(`string to encode: '${input}'`, () => {
                expect(encodeContent(input)).to.be.equal(expected)
            })
        })
    })
    describe('decodeContent', () => {
        testFixture.map(swapEntry).forEach(([input, expected]) => {
            it(`string to decode: '${input}'`, () => {
                expect(decodeContent(input)).to.be.equal(expected)
            })
        })
    })
})
