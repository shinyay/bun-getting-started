# Getting Started with Bun

**Bun is a fast all-in-one JavaScript runtime**

Run, test, transpile, and bundle JavaScript & TypeScript projects — all in Bun. Bun is a new JavaScript runtime built for speed, with a native bundler, transpiler, test runner, and npm-compatible package manager baked-in.

## Description

## Demo

## Features

- feature:1
- feature:2

## Requirement

## Usage

### bun init

`bun init` helps you get started with a minimal project and tries to guess sensible defaults.

```shell
$ bun init
```

```shell
package name (quickstart):
entry point (index.ts):

Done! A package.json file was saved in the current directory.
 + index.ts
 + .gitignore
 + tsconfig.json (for editor auto-complete)
 + README.md

To get started, run:
  bun run index.ts
```

### bun run

Run JavaScript with bun, a package.json script, or a bin.

```shell
$ bun run index.ts
```

## Installation

```shell
$ curl -fsSL https://bun.sh/install | bash
```

```shell
######################################################################## 100.0%
bun was installed successfully to ~/.bun/bin/bun 

Added "~/.bun/bin" to $PATH in "~/.config/fish/config.fish" 

To get started, run: 

 source ~/.config/fish/config.fish 
  bun --help 
```

### bun --help

```shell
$ bun --help

	-h, --help                    	Display this help and exit.
	-b, --bun                     	Force a script or package to use Bun.js instead of Node.js (via symlinking node)
	    --cwd <STR>               	Absolute path to resolve files & entry points from. This just changes the process' cwd.
	-c, --config <PATH>?          	Config file to load bun from (e.g. -c bunfig.toml
	    --extension-order <STR>...	Defaults to: .tsx,.ts,.jsx,.js,.json
	    --jsx-factory <STR>       	Changes the function called when compiling JSX elements using the classic JSX runtime
	    --jsx-fragment <STR>      	Changes the function called when compiling JSX fragments
	    --jsx-import-source <STR> 	Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"
	    --jsx-runtime <STR>       	"automatic" (default) or "classic"
	-r, --preload <STR>...        	Import a module before other modules are loaded
	    --main-fields <STR>...    	Main fields to lookup in package.json. Defaults to --target dependent
	    --no-summary              	Don't print a summary (when generating .bun)
	-v, --version                 	Print version and exit
	    --tsconfig-override <STR> 	Load tsconfig from path instead of cwd/tsconfig.json
	-d, --define <STR>...         	Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON.
	-e, --external <STR>...       	Exclude module from transpilation (can use * wildcards). ex: -e react
	-l, --loader <STR>...         	Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js, jsx, ts, tsx, json, toml, text, file, wasm, napi
	-u, --origin <STR>            	Rewrite import URLs to start with --origin. Default: ""
	-p, --port <STR>              	Port to serve bun's dev server on. Default: "3000"
	    --minify                  	Minify (experimental)
	    --minify-syntax           	Minify syntax and inline data (experimental)
	    --minify-whitespace       	Minify whitespace (experimental)
	    --minify-identifiers      	Minify identifiers
	    --no-macros               	Disable macros from being executed in the bundler, transpiler and runtime
	    --target <STR>            	The intended execution environment for the bundle. "browser", "bun" or "node"
	    --hot                     	Enable auto reload in bun's JavaScript runtime
	    --watch                   	Automatically restart bun's JavaScript runtime on file change
	    --no-install              	Disable auto install in bun's JavaScript runtime
	-i                            	Automatically install dependencies and use global cache in bun's runtime, equivalent to --install=fallback
	    --install <STR>           	Install dependencies automatically when no node_modules are present, default: "auto". "force" to ignore node_modules, fallback to install any missing
	    --prefer-offline          	Skip staleness checks for packages in bun's JavaScript runtime and resolve from disk
	    --prefer-latest           	Use the latest matching versions of packages in bun's JavaScript runtime, always checking npm
	    --silent                  	Don't repeat the command for bun run

-------

bun: a fast bundler, transpiler, JavaScript Runtime and package manager for web software.

  run       ./my-script.ts        Run JavaScript with bun, a package.json script, or a bin
  build     ./a.ts ./b.jsx        Bundle TypeScript & JavaScript into a single file
  x         bun-repl              Install and execute a package bin (bunx)

  init                            Start an empty Bun project from a blank template
  create    next ./app            Create a new project from a template (bun c)
  install                         Install dependencies for a package.json (bun i)
  add       lyra                  Add a dependency to package.json (bun a)
  link                            Link an npm package globally
  remove    backbone              Remove a dependency from package.json (bun rm)
  unlink                          Globally unlink an npm package
  pm                              More commands for managing packages

  dev       ./a.ts ./b.jsx        Start a bun (frontend) Dev Server

  upgrade                         Get the latest version of bun
  completions                     Install shell completions for tab-completion
  discord                         Open bun's Discord server
  help                            Print this help menu
```

## References

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/34c6fdd50d54aa8e23560c296424aeb61599aa71/LICENSE)

## Author

[shinyay](https://github.com/shinyay)
- twitter: https://twitter.com/yanashin18618
