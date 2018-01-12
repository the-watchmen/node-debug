import path from 'path'
import _debug from 'debug'
import findRoot from 'find-root'

const pre = 'dbg'
// const dbg = _debug('dbg:@watchmen:debug')

export default function(file, {tag} = {}) {
  const base = path.basename(file, '.js')
  const dir = path.dirname(file)
  const root = findRoot(dir)
  const {name} = require(path.join(root, 'package.json'))
  const relative = path.relative(root, dir)
  const pathToks = relative.split(path.sep)
  const _pathToks = ['src', 'dist'].includes(pathToks[0]) ? pathToks.slice(1) : pathToks
  const toks = [pre].concat(name.split(path.sep), _pathToks)
  base === 'index' || toks.push(base)
  let _path = toks.join(':')
  if (tag) {
    _path = `${_path}(${tag})`
  }
  // dbg('path=%o', _path)
  return _debug(_path)
}
