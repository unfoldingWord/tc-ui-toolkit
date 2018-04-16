# tc-ui-toolkit
React components use to develop tools for the desktop app [translationCore](https://github.com/unfoldingWord-dev/translationCore).

## Usage

First, install the package using npm:
```
  npm install tc-ui-toolkit --save
```
Then, require the package and use it like so:

```js
import { CheckInfoCard } from 'tc-ui-toolkit';

class App extends Component {
  render() {
    return ()
    ;
  }
}
```

# Development
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

#### Testing your Component UI in the browser

- To test your Component UI in the browser edit the `App.js` file inside the `src` folder in `tc-ui-toolkit-test` by including/importing the component as follow:

```js
import { CheckInfoCard } from 'tc-ui-toolkit';
```
If you want to add additional components then import them as follow:

```js
import { CheckInfoCard, OtherComponentName } from 'tc-ui-toolkit';
```

Then use the UI compoent as follow:

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

- To run the code in the browser follow the next steps:
  - cd to `tc-ui-toolkit-test`
  - run `npm start`
  - The `tc-ui-toolkit-test` app should open in your default browser.