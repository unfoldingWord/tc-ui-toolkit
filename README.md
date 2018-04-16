# tc-ui-toolkit

## Environment setup
- Run `npm run setup`

  or

- `npm i`
- `npm run build`
- `npm link`
- `cd tc-ui-toolkit-test`
- `npm link tc-ui-toolkit`
- `npm i`

Reference:
https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
## Component Development
`tc-ui-toolkit` components should be developed inside their own folder in the `src` folder.

Use the `CheckInfoCard` component as a guide to develop your own `tc-ui-toolkit` components.

#### Commands to get your development rolling

- `npm start` so that webpack watches your changes and reloads (Live hot reloading).
- `npm build src` to build your components code without watching for changes.

#### Directory & file structure

```
src
│  index.js
│  index.test.js
│
└───CheckInforCard
│   │   CheckInfoCard.js
│   │   CheckInfoCard.test.js
│   │   CheckInfoCard.style.css
│   │   index.js
│   │   ...
│
└───ComponentName
│   │   ComponentName.js
│   │   ComponentName.test.js
│   │   ComponentName.style.css
│   │   index.js
│   │   ...
│
└───ComponentName
    │   ComponentName.js
    │   ComponentName.test.js
    │   ComponentName.style.css
    │   index.js
    │   ...
```