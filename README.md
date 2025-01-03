# node-debug

wrapper around the popular [debug](https://github.com/visionmedia/debug) module that generates a conventional namespace from node's [`import.meta.url`](https://nodejs.org/api/esm.html#importmetaurl) construct.

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![build status](https://github.com/the-watchmen/node-debug/actions/workflows/release.yaml/badge.svg)](https://github.com/the-watchmen/node-debug/actions)
[![npm (scoped)](https://img.shields.io/npm/v/@watchmen/debug.svg)](https://www.npmjs.com/package/@watchmen/debug)

> see [tests](test) for examples

## usage

- `npm i @watchmen/debug`

```
import debug from '@watchmen/debug'

const dbg = debug(import.meta.url) // <-- returns an instance of "core" debug object

dbg('data=%o', data)
```

## example namespaces

| `package name`         | `import.meta.url`                                | `namespace`                                |
| ---------------------- | ------------------------------------------------ | ------------------------------------------ |
| `my-package`           | `file://Users/me/my-package/app/stuff/helper.js` | `dbg:my-package:app:stuff:helper`          |
| `my-package`           | `file://Users/me/my-package/app/stuff/index.js`  | `dbg:my-package:app:stuff`                 |
| `@my-group/my-package` | `file://Users/me/my-package/app/stuff/helper.js` | `dbg:my-group:my-package:app:stuff:helper` |

## development

1. `git clone {repo name}`
1. `cd {repo name}`
1. `npm i`
1. `npm test`
