import path from 'path'
import test from 'ava'
import {debug} from '../../src'

test('debug', t => {
  let dbg = debug(__filename)
  t.is(dbg.namespace, 'dbg:@watchmen:debug:test:ava:debug-test')
})

test('debug: index', t => {
  let dbg = debug(path.join(__dirname, 'index.js'))
  t.is(dbg.namespace, 'dbg:@watchmen:debug:test:ava')
})
