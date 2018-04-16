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
- `npm start` so that webpack watches your changes and reloads (Live hot reloading).
- `npm build` to build your components code without watching for changes.

### Directory & file structure

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