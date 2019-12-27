# tc-ui-toolkit

[![Build Status](https://travis-ci.org/translationCoreApps/tc-ui-toolkit.svg?branch=master)](https://travis-ci.org/translationCoreApps/tc-ui-toolkit) ![npm](https://img.shields.io/npm/dt/tc-ui-toolkit.svg)
[![npm](https://img.shields.io/npm/v/tc-ui-toolkit.svg)](https://www.npmjs.com/package/tc-ui-toolkit)

React components used to develop tools for the desktop app [translationCore](https://github.com/unfoldingWord-dev/translationCore).

## Usage

First, install the package using npm:

```js
  npm install tc-ui-toolkit --save
```

Then, require the package and use it like so:

```js
import { CheckInfoCard } from 'tc-ui-toolkit';

class App extends Component {
  render() {
    return (
      <CheckInfoCard />
    )
    ;
  }
}
```

## Contributing

### Environment setup

- Run `npm run setup`

  or
- `npm i`
- `npm run build`
- `npm link` or `sudo npm link`
- `cd tc-ui-toolkit-test`
- `npm i`
- `npm link tc-ui-toolkit`

## Git Branch Management

Note:

- I am using the feature branch named `my-feature-branch` which is a branch you would have created on the `translationCoreApps/tc-ui-toolkit` repo for your feature implementation.
- You do not have to do anything different if your changes are reflected in a translationCore tool. Because the tool will get its `node_modules` from translationCore during runtime.

1. Checkout the master branch for `tc-ui-toolkit`(pull latest), create/checkout your branch called `my-feature-branch`.
2. Implement your feature on `my-feature-branch` and test it in the `tc-ui-toolkit-test` app (That workflow is outlined below)
3. Push your changes from `my-feature-branch` to the `tc-ui-toolkit` origin
4. Once you are ready to test your app on the translationCore repo run `npm i translationCoreApps/tc-ui-toolkit#my-feature-branch` in your translationCore root directory
    - This will give you the changes you made on `tc-ui-toolkit/my-feature-branch` without having to do a premature `npm publish`
5. Ensure all changes work as expected on translationCore branch.
    - Note the workflow to make more changes from your `my-feature-branch` and test them on translationCore is to simply repeat step 3, and then run `rm -rf node_modules/tc-ui-toolkit; npm i tc-ui-toolkit;` in the translationCore root directory. This will give you the pushed changes without having to re-install all the `node_modules`
6. When the feature you implemented is ready and all tests are passing then you are ready for PRs.
7. **run `npm uninstall tc-ui-toolkit; npm i tc-ui-toolkit;`** in the translationCore root directory
   - This will ensure that you do not have the tc-ui-toolkit branch as a npm version. That was merely for testing, not production.
8. Make a PR on the `translationCoreApps/tc-ui-toolkit` repo with your feature implementation `my-feature-branch`
9. After the feature branch on tc-ui-toolkit gets merged make a PR on the `translationCore` repo with a new branch that includes the latest `tc-ui-toolkit` version
    - Note: up until now you did not have to push any changes to a branch for the `tc-ui-toolkit` feature implementation. At this point you will have to do so in order to see changes you made in `my-feature-branch`, reflected in translationCore.
10. Once the PR has been merged, verify the fix from `my-feature-branch` is still working.

## Publish Workflow

1. Review and test PR
2. If requirements are met merge it
3. Checkout to `master` branch
4. run `git pull`
5. Bump package version number
   - Usually will usually be a minor version check for me https://docs.npmjs.com/cli/version
6. `npm i`
7. `npm publish`
8. `git push`

## Component Development

`tc-ui-toolkit` components should be developed inside their own folder in the `src` folder.

Use the `CheckInfoCard` component as a guide to develop your own `tc-ui-toolkit` components.

#### Commands to get your development rolling

- Terminal 1
  - In the root directory of `tc-ui-toolkit`
    - `npm start` so that webpack watches your changes and reloads (Live hot reloading).
      or
    - `npm build src` to build your components code without watching for changes.
- Terminal 2
  - In the `tc-ui-toolkit-test` directory (To render the component in the browser)
    - cd to `tc-ui-toolkit-test`
    - run `npm start`
    - Then the `tc-ui-toolkit-test` app should open in your default browser.

#### Directory & file structure (Root directory of components within `tc-ui-toolkit`)

```js
src
│  index.js
│  index.test.js
│
└───CheckInforCard
│   │   CheckInfoCard.js
│   │   CheckInfoCard.test.js
│   │   CheckInfoCard.styles.css
│   │   index.js
│   │   ...
│
└───ComponentName
│   │   ComponentName.js
│   │   ComponentName.test.js
│   │   ComponentName.styles.css
│   │   index.js
│   │   ...
│   └───SubComponentName
│   │    │   ComponentName.test.js
│   │    │   ComponentName.styles.css
│   │    │   index.js
│   │    │   ...
│   └───SubComponentName
│       │   ComponentName.test.js
│       │   ComponentName.styles.css
│       │   index.js
│       │   ...
│
└───ComponentName
    │   ComponentName.js
    │   ComponentName.test.js
    │   ComponentName.styles.css
    │   index.js
    │   ...
```

#### Rendering your Component UI in the browser

- To render your Component UI in the browser edit the `App.js` file inside the `src` folder in `tc-ui-toolkit-test` by including/importing the component as follow:

```js
import { CheckInfoCard } from 'tc-ui-toolkit';
```

If you want to add additional components then import them as follow:

```js
import { CheckInfoCard, OtherComponentName } from 'tc-ui-toolkit';
```

Then use the UI component as follow:

```js
class App extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <CheckInfoCard
          title="save, saves, saved, safe, salvation"
          phrase='The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.'
          seeMoreLabel="See More"
          showSeeMoreButton={false}
          onSeeMoreClick={() => console.log('clicked')}
        />
      </div>
    );
  }
}
```

References:

- <https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce>
- <https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738>

For `material-ui-next` related questions go to the [material-ui-next website](https://material-ui-next.com/)
