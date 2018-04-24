import React, { Component } from 'react';
import { CheckInfoCard, ScripturePane, TranslationHelps } from 'tc-ui-toolkit';

const article = ( 
<div>
  <p>
    <b> save, saves, saved, safe, salvation</b>
  </p>
  <p>
    Definition:
  </p>
  <p>
    The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.
  </p>
  <p>
    In a physical sense, people can be saved or rescued from harm, danger, or death.
    In a spiritual sense, if a person has been "saved," then God, through Jesus' death on the cross, has forgiven him and rescued him from being punished in hell for his sin.
    People can save or rescue people from danger, but only God can save people from being punished eternally for their sins.
    The term "salvation" refers to being saved or rescued from evil and danger.`
  </p> 
</div>
);

class App extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <ScripturePane
          titleLabel="Step 1. Read"
          closeButtonLabel="Close"
          expandedScripturePaneTitle="Matthew"
          expandButtonHoverText="Click to show expanded resource panes"
        />
        <CheckInfoCard
          title="save, saves, saved, safe, salvation"
          phrase='The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.'
          seeMoreLabel="See More"
          showSeeMoreButton={true}
          onSeeMoreClick={() => console.log('CheckInfoCard clicked')}
          //onSeeMoreClick={() => TranslationHelps('Save') }
        />
        <TranslationHelps
          article={article} 
          expandedScripturePaneIconTitle="Click to show expanded help pane"
          openExpandedScripturePane={() => console.log('Expanded translation helps clicked')}
        />
      </div>
    );
  }
}

export default App;
