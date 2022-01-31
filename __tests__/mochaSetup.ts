import * as lodash from 'lodash'
import {Library, LibraryReturn} from "../src/types";

declare let global: {
	library: Library
}

global.library = {
	load: function (name: string): LibraryReturn {
		switch (name) {
			default:
				throw new Error(`Unsupported library to load: '${name}'`)
			case 'abab':
				throw new Error(`Don't use abab, use function encodeContent or decodeContent instead`)
			case 'lodash':
				return lodash
			case 'buffer':
				return ({Buffer})
		}
	}
}
