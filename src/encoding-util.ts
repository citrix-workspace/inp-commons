import {LibBuffer} from "./types";

const {Buffer} = library.load('buffer') as LibBuffer

export function encodeContent(content) {
        return Buffer.from(content, "utf8").toString("base64");
}

export function decodeContent(content) {
    return Buffer.from(content, "base64").toString("utf8");
}
