# node-helpr

wrapper around the popular [debug](https://github.com/visionmedia/debug) module that generates a conventional namespace from node's current file name variable ([\_\_filename](https://github.com/visionmedia/debug))

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/the-watchmen/node-debug.svg?branch=master)](https://travis-ci.org/the-watchmen/node-debug)
[![npm (scoped)](https://img.shields.io/npm/v/@watchmen/debug.svg)](https://img.shields.io/npm/v/@watchmen/_debug.svg)

> see [tests](test) for examples

## usage

* `yarn add <package name>`

```
import debug from '<package name>'

const dbg = debug(__filename)
```

## example namespaces

| `package name`         | `__filename`                               | `namespace`                                |
| ---------------------- | ------------------------------------------ | ------------------------------------------ |
| `my-package`           | `/Users/me/my-package/app/stuff/helper.js` | `dbg:my-package:app:stuff:helper`          |
| `my-package`           | `/Users/me/my-package/app/stuff/index.js`  | `dbg:my-package:app:stuff`                 |
| `@my-group/my-package` | `/Users/me/my-package/app/stuff/helper.js` | `dbg:my-group:my-package:app:stuff:helper` |

## development

1. `git clone {repo name}`
1. `cd {repo name}`
1. `yarn`
1. `yarn test`
