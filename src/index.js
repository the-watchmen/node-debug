import path from 'node:path'
import {readFileSync} from 'node:fs'
import _debug from 'debug'
import findRoot from 'find-root'

const pre = 'dbg'
// Const dbg = _debug('dbg:@watchmen:debug')

export default function (file, {tag} = {}) {
	// Const file = fileURLToPath(url)
	const _file = file.replace('file://', '')
	const base = path.basename(_file, '.js')
	const dir = path.dirname(_file)
	const root = findRoot(dir)
	const {name} = getPackage(root)
	const relative = path.relative(root, dir)
	const pathToks = relative.split(path.sep)
	const _pathToks = ['src', 'dist'].includes(pathToks[0])
		? pathToks.slice(1)
		: pathToks
	const toks = [pre].concat(name.split(path.sep), _pathToks)
	// eslint-disable-next-line no-unused-expressions
	base === 'index' || toks.push(base)
	let _path = toks.join(':')
	if (tag) {
		_path = `${_path}(${tag})`
	}

	return _debug(_path)
}

function getPackage(root) {
	return JSON.parse(readFileSync(path.join(root, 'package.json')))
}
