<div align="center">
  <img src="https://gist.githubusercontent.com/0-vortex/3ba0d05bcd4afdbd0f2bf20542caf682/raw/02c432297a6822cd2944a41b9cc9986357d49748/His_Worshipful_Grace-1.svg" width="400">

# @tmcb/next.tmcb.space

> A Next.js Personal Website with a Native Authoring Experience
>
> This starter is based on [@sanity-io/template-nextjs-personal-website](https://github.com/sanity-io/template-nextjs-personal-website)

[![Commits](https://img.shields.io/github/commit-activity/w/TMCB-SPACE/next.tmcb.space?style=flat)](https://github.com/TMCB-SPACE/next.tmcb.space/pulse)
[![Issues](https://img.shields.io/github/issues/TMCB-SPACE/next.tmcb.space.svg?style=flat)](https://github.com/TMCB-SPACE/next.tmcb.space/issues)
[![Releases](https://img.shields.io/github/v/release/TMCB-SPACE/next.tmcb.space.svg?style=flat)](https://github.com/TMCB-SPACE/next.tmcb.space/releases)

</div>

## Prerequisites

In order to run the project we need the following software binaries installed on our development machines:

- `node>=21.1.0`
- `npm>=10.2.3`

We can also use one of the listed cloud providers we support:

## 🖥️ Local development

To install the application:

```shell
npm ci
```

To start a local copy of the app on port `3000`:

```shell
npm run dev
```

### 📦 Docker builds

A development preview can also be run from docker:

```shell
docker build -t next.tmcb.space .
docker run -p 8080:80 next.tmcb.space
```

Alternatively you can pull the production container and skip all builds:

```shell
docker run -dit -p 8080:80 ghcr.io/tmcb-space/next.tmcb.space:latest
```

### 🎨 Code linting

To check the code and styles quality, use the following command:

```shell
npm run lint
```

This will also display during development, but not break on errors.

To fix the linting errors, use the following command:

```shell
npm run format
```

It is advised to run this command before committing or opening a pull request.

### 📕 Types

We have a couple of scripts to check and adjust missing types.

In order to dry run what types would be added to `package.json`:

```shell
npm run types:auto-check
```

In order to add any missing types to `package.json`:

```shell
npm run types:auto-add
```

### 🚀 Production deployment

A production deployment is a complete build of the project, including the build of the static assets.

```shell
npm run build
```

## 🤝 Contributing

We have a commit utility called [@tmcb/conventional-commit](https://github.com/tmcb-space/conventional-commit) that helps you write your commits in a way that is easy to understand and process by others.

It is generally integrated as an `npm` script but you can run it with `npx` as well:

```shell
npm run push
```

For any other npm based project or dotnpmrc defaulting to `--yes`:

```shell
npx -y @tmcb/conventional-commit
```

## ⚖️ LICENSE

MIT © [TED (Teodor-Eugen Dutulescu) Vortex](./LICENSE)
