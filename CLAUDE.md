# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`tc-ui-toolkit` is a React component library published to npm and consumed by
[translationCore](https://github.com/unfoldingWord-dev/translationCore), unfoldingWord's Electron desktop app for
Bible translation tools. It is not a standalone app — components are built here, published, and imported by
translationCore and its tools. There is a companion dev harness app in `tc-ui-toolkit-test/` used only to render
components in a browser during local development (it is not part of the published package).

## Commands

- `npm run setup` — one-shot bootstrap: installs deps, builds, `npm link`s this package, then installs/links it into
  `tc-ui-toolkit-test`. Use this the first time you set up the repo.
- `npm test` — runs `eslint ./src && jest`. This is what CI runs; always run it before considering work done.
- `npm run lint` / `npm run lint:fix` — ESLint over `src/` only.
- Single test file: `npx jest path/to/Component.test.js`
- Single test by name: `npx jest -t "test name substring"`
- `npm run build` — Babel-compiles `src/` to `lib/` (this is the `main` entry published to npm; `prepare`/
  `prepublishOnly` run this automatically).
- `npm start` (or `npm run render-ui`) — webpack-bundles `src/` to `dist/bundle.js` and starts the
  `tc-ui-toolkit-test` app so you can see components rendered live. `npm run webpack:w` watches and rebuilds on
  change (run this in one terminal, `cd tc-ui-toolkit-test && npm start` in a second, per the README's two-terminal
  workflow).

There are two separate build outputs: `lib/` (Babel, published as the npm package's `main`) and `dist/` (webpack
bundle, used only by the local `tc-ui-toolkit-test` harness). Don't confuse them.

## Architecture

### Component layout convention

Every component lives in its own folder under `src/`, named after the component, containing at minimum:
`ComponentName.js` (implementation), `index.js` (re-export, usually `export { default } from './ComponentName'`),
`ComponentName.test.js`, and often `ComponentName.styles.css`. Components that are composed of sub-parts nest
sub-component folders the same way (e.g. `src/VerseCheck/CheckArea/`, `src/GroupMenu/GroupItems/`). Cross-cutting
non-component logic for a feature area lives in a sibling `helpers/` folder (e.g. `src/VerseCheck/helpers/`,
`src/ScripturePane/helpers/`) with its own `__tests__`/`__test__` folder — keep this split (component vs. helpers)
when adding new logic rather than inlining everything into the component file.

### Public API surface

`src/index.js` is the single barrel file that defines what the package exports — anything not re-exported there is
private to the library. When adding a new component or helper meant for consumers (translationCore or tools), it
must be added here explicitly. Notable exports beyond components: `TcuiThemeProvider`/`createTcuiTheme` (Material-UI
theming re-exports), and helper namespaces like `lexiconHelpers`, `verseHelpers`.

### Major component areas

- `VerseCheck` — the core "checking" UI (translationHelps validation workflow): composed of `ActionsArea`,
  `CheckArea` (which itself composes `DefaultArea`/`SelectionArea`/`InstructionsArea`/`EditVerseArea`/`CommentArea`
  depending on `mode`), `SaveArea`, `DialogComponent`, `IconIndicators`. Driven almost entirely by props passed down
  from the consuming app (translationCore) — there's no internal data-fetching or global state; behavior (save,
  cancel, comment, edit, selection validation, suggestions, etc.) is delegated to callback props.
- `ScripturePane` — scripture display/editing panes (`Pane`, `Panes`, `Verse`, `AddBibleButton`, `AddPaneModal`,
  `ExpandedScripturePaneModal`), with a large `helpers/` module for USFM parsing, lexicon lookups, string/highlight
  utilities.
- `GroupMenu` / `GroupedMenu` — sidebar/menu components for navigating groups of checks, each with their own
  filtering sub-components.
- `TranslationHelps`, `CommentsDialog`, `VerseEditor`, `WordLexiconDetails`, `Bookmark`, `DropdownMenu`,
  `FontSelectionMenu`, `FontSizeSlider` — smaller standalone components, each self-contained per the folder
  convention above.

### Peer dependencies

`react`, `react-dom`, `word-aligner`, `usfm-js`, `string-punctuation-tokenizer`, and `bible-reference-range` are
`peerDependencies`, not bundled — the consuming app supplies them. `webpack.config.js` also marks `react`,
`string-punctuation-tokenizer`, and `word-aligner` as `externals` for the same reason. Don't move these into
`dependencies`.

### Testing

Jest + Enzyme (React 16 adapter) with snapshot testing (`__snapshots__` folders alongside tests). `jest.setup.js`
wires up `jest-enzyme`. CSS imports are mocked via `jest-css-modules` (see `moduleNameMapper` in `package.json`).
Tests are colocated either as `Component.test.js` next to the component or grouped under a `__tests__`/`__test__`
folder for a feature area's helpers.

## Local end-to-end workflow

Because this package is consumed via `npm link` (not a live monorepo), verifying a change against real usage
requires either the `tc-ui-toolkit-test` harness (`npm start`, edit `tc-ui-toolkit-test/src/App.js` to import and
render the component being changed) or linking into a local translationCore checkout. See the README's "Git Branch
Management" section for the full branch/link/publish cycle used to land a feature into translationCore.