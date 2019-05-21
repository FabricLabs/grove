RPG Chat
========
[![Tests are PASSING! 🚀][test-status-badge]][test-status-home]

RPG Chat is an offline-first client for [the RPG community][rpg].

## Built with Fabric
RPG Chat is built with [Fabric][fabric], a tool for building peer-to-peer apps
like Verse, RPG's decentralized game engine.  Much more on that later!

## Getting Started
We recommend using `yarn`, but `npm` should suffice in most cases.

### Quick Start
1. `yarn install`
2. `yarn build`
3. `yarn start`

If all goes well, a local URL will print to the console which can be used to
browse the now-running development server.

## Building
RPG Chat is a cross-platform application, built from this repository.  To build
all downstream clients, use the `build:all` command:

```
yarn build:all`
```

Additional commands are included for building on Windows, Linux, and Mac:

- `yarn build:windows`
- `yarn build:linux`
- `yarn build:mac`

That's all there is to it.  See `npm run docs` for more options.  gl;hf!

[fabric]: https://fabric.pub
[rpg]: https://www.roleplaygateway.com
[test-status-badge]: https://img.shields.io/travis/RolePlayGateway/chat.verse.im.svg?branch=master&style=flat-square
[test-status-home]: https://travis-ci.org/RolePlayGateway/chat.verse.im
[verse]: https://verse.im
