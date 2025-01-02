import path from 'node:path'
import {fileURLToPath} from 'node:url'
import test from 'ava'
import debug from '../../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('debug', (t) => {
	const dbg = debug(import.meta.url)
	t.is(dbg.namespace, 'dbg:@watchmen:debug:test:ava:debug-test')
})

test('debug: index', (t) => {
	const dbg = debug(path.join(__dirname, 'index.js'))
	t.is(dbg.namespace, 'dbg:@watchmen:debug:test:ava')
})

test('debug: src', (t) => {
	const dbg = debug(path.join(__dirname.replace('test', 'src'), 'foo/bar.js'))
	t.is(dbg.namespace, 'dbg:@watchmen:debug:ava:foo:bar')
})

test('debug: dist', (t) => {
	const dbg = debug(path.join(__dirname.replace('test', 'dist'), 'foo/bar.js'))
	t.is(dbg.namespace, 'dbg:@watchmen:debug:ava:foo:bar')
})

test('debug: tag', (t) => {
	const dbg = debug(__filename, {tag: 'foo'})
	t.is(dbg.namespace, 'dbg:@watchmen:debug:test:ava:debug-test(foo)')
})
