import path from 'path'
import _debug from 'debug'
import findRoot from 'find-root'

const pre = 'dbg'
const dbg = _debug('dbg:@watchmen:debug')

export default function(file) {
  const base = path.basename(file, '.js')
  const dir = path.dirname(file)
  const root = findRoot(dir)
  const {name} = require(path.join(root, 'package.json'))
  const relative = path.relative(root, dir)
  const toks = [pre].concat(name.split(path.sep), relative.split(path.sep))
  base === 'index' || toks.push(base)
  const _path = toks.join(':')
  dbg('path=%o', _path)
  return _debug(_path)
}
