import React, {Component} from 'react';

import {CheckInfoCard, ScripturePane, VerseCheck, VerseEditor, GroupMenu} from 'tc-ui-toolkit';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
        <GroupMenu />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <ScripturePane
            titleLabel="Step 1. Read"
            closeButtonLabel="Close"
            expandedScripturePaneTitle="Matthew"
            expandButtonHoverText="Click to show expanded resource panes" />
          <CheckInfoCard
            title="save, saves, saved, safe, salvation"
            phrase='The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.'
            seeMoreLabel="See More"
            showSeeMoreButton={true}
            onSeeMoreClick={() => console.log('CheckInfoCard clicked')} />
          <VerseCheck />
        </div>
      </div>
    );
  }
}

export default App;
